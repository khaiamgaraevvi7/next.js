

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-600 text-white text-2xl font-bold">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="bg-orange-500 h-64 w-124 rounded-lg">
          <h2 className="text-center mt-28">Welcome Next.js (Demo mode)</h2>
        </div>
      </main>
    </div>
  );
}
