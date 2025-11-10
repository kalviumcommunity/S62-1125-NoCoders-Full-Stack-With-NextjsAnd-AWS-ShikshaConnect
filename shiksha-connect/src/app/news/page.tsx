// Revalidate every 60 seconds — this makes it a hybrid (ISR) page
export const revalidate = 60;

export default async function NewsPage() {
  // Use a stable, dummy API instead of Coindesk
  const res = await fetch('https://dummyjson.com/products?limit=3');
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold text-green-700 mb-4">News Page (ISR)</h1>
      <p className="mb-2 text-gray-600">
        This page is regenerated every 60 seconds ⚡
      </p>

      <ul className="space-y-3">
        {data.products.map((item: any) => (
          <li key={item.id} className="border p-4 rounded-lg shadow">
            <strong>{item.title}</strong> — ${item.price}
          </li>
        ))}
      </ul>
    </main>
  );
}
