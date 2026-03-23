"use client";

import Link from "next/link";
import { useState } from "react";

export default function InsertarPage() {
  // Variables de estado para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [salario, setSalario] = useState("");
  
  // Variables de estado para mostrar mensajes de éxito o error
  const [mensaje, setMensaje] = useState("");
  const [errorStatus, setErrorStatus] = useState<boolean | null>(null);

  // Función del botón Insertar - VERSIÓN INICIAL (sin implementación)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Implementar lógica de inserción
    console.log("Funcionalidad pendiente de implementar");
    setMensaje("Función en desarrollo");
    setErrorStatus(true);
  };

  // Mensajes, verde si es éxito, rojo si es error.
  let clasesNotificacion = "w-full p-4 rounded-md text-center ";
  if (errorStatus) {
    clasesNotificacion += "bg-red-100 text-red-700 border border-red-400";
  } else {
    clasesNotificacion += "bg-green-100 text-green-700 border border-green-400";
  }

  let componenteMensaje = null;
  if (mensaje) {
    componenteMensaje = (
      <div className={clasesNotificacion}>
        {mensaje}
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white px-6 py-10 text-black">
      <div className="mx-auto flex w-full max-w-md flex-col items-center gap-8">
        <h1 className="text-4xl font-bold">Insertar Empleado</h1>

        {componenteMensaje}

        <form onSubmit={handleSubmit} noValidate className="flex w-full flex-col gap-6 p-2">
          
          <div className="flex items-center gap-4">
            <label htmlFor="nombre" className="w-24 text-left text-lg font-medium text-gray-700">
              Nombre:
            </label>
            <input
              id="nombre"
              type="text"
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)} 
              placeholder="Ejemplo: Erik Zhou"
              className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-lg"
            />
          </div>

          <div className="flex items-center gap-4">
            <label htmlFor="salario" className="w-24 text-left text-lg font-medium text-gray-700">
              Salario:
            </label>
            <input
              id="salario"
              type="number"
              value={salario}
              onChange={(e) => setSalario(e.target.value)}
              placeholder="Ejemplo: 520000"
              min="0"
              className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-lg"
            />
          </div>

          {/* Botones de acción del formulario */}
          <div className="mt-4 flex w-full items-center justify-between">
            <button
              type="submit"
              className="rounded-md bg-green-600 px-6 py-2 text-lg font-semibold text-white transition-colors hover:bg-green-700"
            >
              Insertar
            </button>

            {/* Enlace para volver rápido a la pantalla de la tabla */}
            <Link
              href="/"
              className="rounded-md border border-gray-300 px-6 py-2 text-lg font-medium text-gray-700 transition-colors hover:bg-gray-200"
            >
              Regresar
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}