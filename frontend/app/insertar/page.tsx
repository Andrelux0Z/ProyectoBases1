import Link from "next/link";

export default function InsertarPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-black">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8">
        <h1 className="text-4xl font-bold">Menú de insertar</h1>

        <Link
          href="/"
          className="rounded-md border border-gray-300 px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100"
        >
          Volver
        </Link>
      </div>
    </main>
  );
}
