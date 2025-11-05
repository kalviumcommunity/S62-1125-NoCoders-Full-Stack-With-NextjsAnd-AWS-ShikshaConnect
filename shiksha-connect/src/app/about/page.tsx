export const revalidate = false;

export default function AboutPage() {
  return (
    <main className="p-6 space-y-2">
      <h1 className="text-3xl font-semibold">About ShikshaConnect</h1>
      <p className="text-gray-700">
        ShikshaConnect is an offline-first Progressive Web App designed for rural and
        low-internet schools. It ensures learning continues even without stable internet.
      </p>
    </main>
  );
}
