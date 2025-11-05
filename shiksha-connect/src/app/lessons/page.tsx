export const revalidate = 60;

type Lesson = {
  id: string;
  title: string;
};

export default async function LessonsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lessons`, {
    next: { revalidate: 60 }
  });

  const lessons: Lesson[] = await res.json();

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-3xl font-semibold">Lessons</h1>
      <p className="text-gray-700">
        This page updates every 60 seconds in the background.
      </p>

      <ul className="space-y-2">
        {lessons.map((lesson) => (
          <li key={lesson.id} className="p-3 bg-white shadow rounded">
            {lesson.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
