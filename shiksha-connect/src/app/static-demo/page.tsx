// app/static-demo/page.tsx
export const revalidate = false; // Completely static
export const dynamic = "force-dynamic";
export default async function StaticDemoPage() {
  const data = await fetch('https://dummyjson.com/products?limit=5', {
    cache: 'force-cache',
  }).then(res => res.json());

  return (
    <main style={{ padding: 20 }}>
      <h1>🪶 Static Rendering (SSG)</h1>
      <p>This page is pre-rendered at build time — super fast and cached permanently.</p>
      <ul>
        {data.products.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </main>
  );
}