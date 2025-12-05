import { getLesson } from "@/libs/getLesson";
import LessonClient from "./LessonClient";

export default async function LessonPage({
  params,
}: {
  params: { courseId: string; lessonId: string };
}) {
  const { courseId, lessonId } = await params;

  const data = await getLesson(courseId, lessonId);

  if (!data || !data.lesson)
    return <div className="p-10 text-red-600">Lesson not found</div>;

  return (
    <LessonClient
      course={data.course}
      lesson={data.lesson}
      courseId={courseId}
    />
  );
}
