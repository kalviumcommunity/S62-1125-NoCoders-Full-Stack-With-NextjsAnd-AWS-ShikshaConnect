// app/dynamic-demo/page.tsx
export const dynamic = 'force-dynamic'; // disable all caching
export default async function DynamicDemoPage() {
  const data = await fetch('https://dummyjson.com/quotes/random', {
    cache: 'no-store',
  }).then(res => res.json());

  return (
    <main style={{ padding: 20 }}>
      <h1>⚙️ Dynamic Rendering (SSR)</h1>
      <p>This data is fetched live on each request — perfect for dashboards or user feeds.</p>
      <blockquote>
        "{data.quote}" — <b>{data.author}</b>
      </blockquote>
      <p><i>Refresh to see a new random quote fetched each time.</i></p>
    </main>
  );
}