// prisma/seed.ts
import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting Shiksha Connect seed...');

  // --- Create Roles via Enum (already in schema)
  // --- Create a Teacher ---
  const teacher = await prisma.user.upsert({
    where: { email: 'asha.teacher@shiksha.test' },
    update: {},
    create: {
      email: 'asha.teacher@shiksha.test',
      name: 'Asha Teacher',
      role: Role.TEACHER,
    },
  });

  // --- Create a Student ---
  const student = await prisma.user.upsert({
    where: { email: 'ram.student@shiksha.test' },
    update: {},
    create: {
      email: 'ram.student@shiksha.test',
      name: 'Ram Student',
      role: Role.STUDENT,
    },
  });

  // --- Create a Course owned by Asha ---
  const course = await prisma.course.create({
    data: {
      title: 'Introduction to Science',
      description: 'A beginner-friendly course on the basics of matter and energy.',
      ownerId: teacher.id,
      lessons: {
        create: [
          {
            title: 'Lesson 1: What is Matter?',
            content: 'Matter is anything that has mass and occupies space.',
            order: 1,
            videoAsset: {
              create: {
                url: 'https://cdn.example.com/videos/matter.mp4',
                duration: 420,
              },
            },
            resources: {
              create: [
                {
                  filename: 'Lesson1_Slides.pdf',
                  url: 'https://cdn.example.com/resources/slides1.pdf',
                },
              ],
            },
          },
          {
            title: 'Lesson 2: States of Matter',
            content: 'Learn about solids, liquids, gases, and plasma.',
            order: 2,
            videoAsset: {
              create: {
                url: 'https://cdn.example.com/videos/states-of-matter.mp4',
                duration: 380,
              },
            },
          },
        ],
      },
    },
    include: { lessons: true },
  });

  // --- Enroll Student into the Course ---
  await prisma.enrollment.create({
    data: {
      userId: student.id,
      courseId: course.id,
      role: 'student',
    },
  });

  // --- Add Progress for Lesson 1 ---
  await prisma.progress.create({
    data: {
      userId: student.id,
      lessonId: course.lessons[0].id,
      percent: 30.5,
    },
  });

  // --- Add Comment ---
  await prisma.comment.create({
    data: {
      content: 'This video was super clear!',
      lessonId: course.lessons[0].id,
      userId: student.id,
    },
  });

  console.log('✅ Seeding complete!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });