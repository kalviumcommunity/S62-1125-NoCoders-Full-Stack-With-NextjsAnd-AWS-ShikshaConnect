import { prisma } from "./prisma";

export async function getLesson(courseId: string, lessonId: string) {
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    select: {
      id: true,
      title: true,
      modules: {
        select: {
          id: true,
          title: true,
          lessons: {
            select: {
              id: true,
              title: true,
              duration: true,
            },
            orderBy: { createdAt: "asc" },
          },
        },
      },
    },
  });

  if (!course) return null;

  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    include: {
      resources: true,
      module: true,
    },
  });

  return { course, lesson };
}
