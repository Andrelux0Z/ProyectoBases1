import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-black">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8">
        <h1 className="text-4xl font-bold">Lista de empleados</h1>

        <section className="flex h-72 w-full items-center justify-center rounded-lg border-2 border-gray-400 bg-gray-50">
          <p className="text-lg text-gray-600">Aquí irá la tabla de empleados</p>
        </section>

        <Link
          href="/insertar"
          className="rounded-md bg-green-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-green-700"
        >
          Insertar datos
        </Link>
      </div>
    </main>
  );
}
