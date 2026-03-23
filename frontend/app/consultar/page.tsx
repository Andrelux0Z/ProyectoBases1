"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ConsultarPage() {
  const [empleados, setEmpleados] = useState<any[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Solicitud GET para obtener la lista de empleados
    fetch("http://localhost:5000/api/empleados")
      .then((respuesta) => respuesta.json()) // Convierte la respuesta a formato JSON
      .then((datos) => {
        // Verifica si los datos recibidos son de tipo Array
        if (Array.isArray(datos)) {
          setEmpleados(datos); // Guarda la lista en el estado "empleados"
        }
        setCargando(false); // Apaga el indicador de "cargando"
      })
      .catch((error) => {
        // En caso de que el backend esté apagado o haya un error, se atrapa aquí
        console.error("Error pidiendo empleados:", error);
        setCargando(false);
      });
  }, []);

  let contenidoTabla = null;

  if (cargando) {
    // Mensaje que aparece mientras la petición se completa
    contenidoTabla = <p className="text-center text-lg text-gray-600 mt-10 p-6">Cargando tabla...</p>;
  } else if (empleados.length === 0) {
    // Mensaje cuando la petición es exitosa pero la base de datos está vacía
    contenidoTabla = <p className="text-center text-lg text-gray-600 mt-10 p-6">No hay empleados registrados en la base de datos.</p>;
  } else {
    // Muestra la tabla si hay empleados
    contenidoTabla = (
      <table className="w-full text-left border-collapse">
        {/* Encabezado fijado*/}
        <thead className="sticky top-0 bg-gray-100 z-10 shadow-sm">
          <tr className="border-b-2 border-gray-300">
            <th className="py-3 px-6 font-bold text-gray-800">id</th>
            <th className="py-3 px-6 font-bold text-gray-800">Nombre</th>
            <th className="py-3 px-6 font-bold text-gray-800">Salario</th>
          </tr>
        </thead>
        <tbody>
          {/* Recorre la lista de empleados mapeándolos a filas de la tabla */}
          {empleados.map((empleado, index) => {
            let salarioMostrado = "";
            if (empleado.salarioEmpleado !== null && empleado.salarioEmpleado !== undefined) {
              salarioMostrado = empleado.salarioEmpleado.toLocaleString();
            }

            return (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-6">{empleado.idEmpleado}</td>
                <td className="py-3 px-6">{empleado.nombreEmpleado}</td>
                <td className="py-3 px-6">₡{salarioMostrado}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  return (
    <main className="min-h-screen bg-white px-6 py-10 text-black">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8">
        <h1 className="text-4xl font-bold">Lista de empleados</h1>

        {/* Contenedor principal de la tabla */}
        <section className="w-full h-[500px] rounded-lg border-2 border-gray-400 bg-white overflow-y-auto shadow-inner">
          {contenidoTabla}
        </section>

        {/* Botón que redirige a la página de insertar */}
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
