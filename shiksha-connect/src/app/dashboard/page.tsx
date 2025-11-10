export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  const res = await fetch('https://dummyjson.com/products/1', {
    cache: 'no-store',
  });
  const data = await res.json();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold text-sky-700">Live Dashboard</h1>
      <p className="mt-4 text-slate-700">
        This page uses <b>Server-Side Rendering (SSR)</b>. Data is fetched on every request.
      </p>
      <p className="mt-4 text-lg">
        Product: <b>{data.title}</b> — ${data.price}
      </p>
      <p className="mt-2 text-sm text-slate-500">
        Ideal for live dashboards or analytics pages.
      </p>
    </main>
  );
}
