type Lesson = {
  id: string;
  title: string;
};

export default async function LessonsPage() {
  let lessons: Lesson[] = [];

  try {
    // Skip fetch during build
    if (process.env.NODE_ENV !== "production" || process.env.SKIP_FETCH !== "true") {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lessons`, {
        next: { revalidate: 60 }
      });
      lessons = await res.json();
    }
  } catch (err) {
    console.error("⚠️ Failed to fetch lessons:", err);
  }

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-3xl font-semibold">Lessons</h1>
      <p className="text-gray-700">This page updates every 60 seconds in the background.</p>

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
