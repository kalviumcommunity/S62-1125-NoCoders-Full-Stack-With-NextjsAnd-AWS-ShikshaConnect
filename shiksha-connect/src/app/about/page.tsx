// Static Rendering — pre-rendered at build time
export const revalidate = false;

export default function AboutPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold text-emerald-700">About ShikshaConnect</h1>
      <p className="mt-4 text-slate-700">
        This page uses <b>Static Site Generation (SSG)</b>. Its built once at deploy time and then
        served instantly from CDN for the fastest load speed.
      </p>
      <p className="mt-2 text-sm text-slate-500">Ideal for: marketing, blogs, or info pages.</p>
    </main>
  );
}
