"use client";
import { useState } from "react";

export default function NotasPage() {
  const [notas, setNotas] = useState({ n1: "", n2: "", n3: "" });
  const [definitiva, setDefinitiva] = useState<number | null>(null);

  const calcularNota = () => {
    const v1 = parseFloat(notas.n1) || 0;
    const v2 = parseFloat(notas.n2) || 0;
    const v3 = parseFloat(notas.n3) || 0;

    // Validación básica
    if (v1 > 5 || v2 > 5 || v3 > 5) {
      alert("Las notas no pueden ser mayores a 5.0");
      return;
    }

    const calculo = (v1 * 0.3) + (v2 * 0.3) + (v3 * 0.4);
    setDefinitiva(Number(calculo.toFixed(2)));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="bg-gray-950 p-8 rounded-3xl shadow-2xl w-full max-w-sm border border-gray-800">
        <h1 className="text-xl font-semibold mb-6 text-gray-400 text-center tracking-widest uppercase text-sm">
          Semestre Académico
        </h1>

        <div className="space-y-5">
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Primer Corte (30%)</label>
            <input 
              type="number" step="0.1" max="5" min="0"
              value={notas.n1} onChange={(e) => setNotas({...notas, n1: e.target.value})}
              className="w-full p-3 bg-gray-900 border border-gray-800 rounded-xl text-white outline-none focus:border-blue-500 transition" 
              placeholder="Ej: 4.5"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Segundo Corte (30%)</label>
            <input 
              type="number" step="0.1" max="5" min="0"
              value={notas.n2} onChange={(e) => setNotas({...notas, n2: e.target.value})}
              className="w-full p-3 bg-gray-900 border border-gray-800 rounded-xl text-white outline-none focus:border-blue-500 transition" 
              placeholder="Ej: 3.8"
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Tercer Corte (40%)</label>
            <input 
              type="number" step="0.1" max="5" min="0"
              value={notas.n3} onChange={(e) => setNotas({...notas, n3: e.target.value})}
              className="w-full p-3 bg-gray-900 border border-gray-800 rounded-xl text-white outline-none focus:border-blue-500 transition" 
              placeholder="Ej: 4.2"
            />
          </div>

          <button 
            onClick={calcularNota}
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-xl hover:bg-blue-500 transition-colors mt-2 active:scale-95"
          >
            Calcular Definitiva
          </button>

          {definitiva !== null && (
            <div className={`mt-6 p-4 rounded-xl text-center border ${definitiva >= 3.0 ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-red-500/10 border-red-500/30 text-red-400'}`}>
              <p className="text-sm opacity-80 mb-1">Nota Definitiva</p>
              <p className="text-4xl font-bold">{definitiva}</p>
              <p className="text-xs mt-1">{definitiva >= 3.0 ? "¡Aprobado!" : "Reprobado"}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}