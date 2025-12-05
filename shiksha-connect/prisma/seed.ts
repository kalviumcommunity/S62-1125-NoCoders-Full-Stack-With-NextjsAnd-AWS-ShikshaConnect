import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  const teacher = await prisma.user.upsert({
    where: { email: "teacher@example.com" },
    update: {},
    create: {
      name: "Mr. Arun Sharma",
      email: "teacher@example.com",
      password: "test1234",
    },
  });

  const mathCourse = await prisma.course.create({
    data: {
      title: "Fundamentals of Mathematics",
      description:
        "A comprehensive mathematics course for Classes 6–10 with offline-ready lessons.",
      category: "Mathematics",
      level: "Beginner",
      duration: "8 weeks",
      teacherName: "Mr. Arun Sharma",
      teacherBio:
        "15+ years teaching in rural schools, known for simplifying complex concepts.",
      offlineAvailable: true,

      modules: {
        create: [
          {
            title: "Introduction to Numbers",
            duration: "45 min",
            lessons: {
              create: [
                {
                  title: "Whole Numbers",
                  duration: "10 min",
                  summary: "Understanding whole numbers and counting.",
                  transcript: "Whole numbers are 0,1,2,3...",
                  notes: "Whole numbers include 0 and positive integers.",
                },
                {
                  title: "Fractions",
                  duration: "12 min",
                  summary: "Understanding numerator & denominator.",
                  transcript: "Fractions represent parts of a whole...",
                  notes: "Used in cooking, measuring, sharing.",
                },
                {
                  title: "Decimals",
                  duration: "23 min",
                  summary: "Basics of decimal representation.",
                  transcript: "Decimals allow us to represent fractional values...",
                  notes: "Used in money and measurement.",
                },
              ],
            },
          },
          {
            title: "Arithmetic Operations",
            duration: "60 min",
            lessons: {
              create: [
                {
                  title: "Addition Basics",
                  duration: "20 min",
                  summary: "Simple addition rules.",
                  transcript: "Addition combines two or more numbers...",
                  notes: "Practice with real-life examples.",
                },
                {
                  title: "Subtraction Basics",
                  duration: "18 min",
                  summary: "Understanding subtraction.",
                  transcript: "Subtraction means removing from a group...",
                  notes: "Used in daily budgeting.",
                },
                {
                  title: "Multiplication Intro",
                  duration: "22 min",
                  summary: "Multiplication is repeated addition.",
                  transcript: "Multiplication helps in scaling numbers...",
                  notes: "Focus on tables from 1–10.",
                },
                {
                  title: "Division Basics",
                  duration: "25 min",
                  summary: "Dividing into equal parts.",
                  transcript: "Division splits quantities equally...",
                  notes: "Important for sharing & distribution.",
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log("✅ Seed completed!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
