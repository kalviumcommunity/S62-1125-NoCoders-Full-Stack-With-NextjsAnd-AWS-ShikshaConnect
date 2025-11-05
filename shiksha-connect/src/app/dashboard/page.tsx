export const dynamic = "force-dynamic";

type Stats = {
  totalStudents: number;
  lessonsCompleted: number;
};

export default async function DashboardPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/stats`, {
    cache: "no-store"
  });

  const data: Stats = await res.json();

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <p className="text-gray-700">This data is always fresh and live.</p>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow rounded">Total Students: {data.totalStudents}</div>
        <div className="p-4 bg-white shadow rounded">Lessons Completed: {data.lessonsCompleted}</div>
      </div>
    </main>
  );
}
