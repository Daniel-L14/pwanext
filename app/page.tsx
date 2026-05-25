"use client";
import { useState } from "react";

export default function Home() {
  const [resultado, setResultado] = useState("0");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-6 text-black">Calculadora</h1>
        <div className="text-4xl font-bold bg-gray-200 p-4 rounded mb-6 text-black">
          {resultado}
        </div>
        <button 
          onClick={() => setResultado("¡Funciona!")}
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Probar Botón
        </button>
      </div>
    </main>
  );
}