// app/hybrid-demo/page.tsx
export const revalidate = 60; // Regenerate every 60 seconds

export default async function HybridDemoPage() {
  const data = await fetch('https://dummyjson.com/posts', {
    next: { revalidate: 60 },
  }).then(res => res.json());

  return (
    <main style={{ padding: 20 }}>
      <h1>🧩 Hybrid Rendering (ISR)</h1>
      <p>This page uses Incremental Static Regeneration — cached for 60 seconds, then updated automatically.</p>
      <ul>
        {data.posts.slice(0, 5).map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <p><i>Wait 60 seconds and refresh to see new posts.</i></p>
    </main>
  );
}
