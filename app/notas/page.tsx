"use client";

export default function NotasPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-6 text-black">Calculadora de Notas</h1>
        <div className="space-y-4">
          <input type="number" placeholder="Nota 1 (30%)" className="w-full p-2 border rounded text-black" />
          <input type="number" placeholder="Nota 2 (30%)" className="w-full p-2 border rounded text-black" />
          <input type="number" placeholder="Nota 3 (40%)" className="w-full p-2 border rounded text-black" />
          <button className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition">
            Calcular Definitiva
          </button>
        </div>
      </div>
    </main>
  );
}