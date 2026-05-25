"use client";
import { useState } from "react";

export default function Home() {
  const [expresion, setExpresion] = useState("");
  const [resultado, setResultado] = useState("0");

  const manejarClic = (valor: string) => {
    if (valor === "C") {
      setExpresion("");
      setResultado("0");
      return;
    }
    if (valor === "=") {
      try {
        // Evaluación segura matemática básica
        const evalResultado = Function(`'use strict'; return (${expresion})`)();
        setResultado(String(evalResultado));
      } catch (error) {
        setResultado("Error");
      }
      return;
    }
    setExpresion((prev) => prev + valor);
  };

  const botones = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "C", "0", "=", "+"
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="bg-gray-950 p-6 rounded-3xl shadow-2xl w-full max-w-sm border border-gray-800">
        <h1 className="text-xl font-semibold mb-4 text-gray-400 text-center tracking-widest uppercase text-sm">
          Calculadora Pro
        </h1>
        
        {/* Pantalla */}
        <div className="bg-gray-900 p-4 rounded-xl mb-6 flex flex-col items-end shadow-inner h-24 justify-end border border-gray-800">
          <span className="text-gray-500 text-sm mb-1 min-h-[20px]">{expresion}</span>
          <span className="text-4xl font-bold text-white tracking-wider">{resultado}</span>
        </div>

        {/* Teclado */}
        <div className="grid grid-cols-4 gap-3">
          {botones.map((btn) => (
            <button
              key={btn}
              onClick={() => manejarClic(btn)}
              className={`p-4 text-xl font-medium rounded-2xl transition-all duration-200 active:scale-95 ${
                btn === "C" ? "bg-red-500/20 text-red-500 hover:bg-red-500/30"
                : btn === "=" ? "bg-blue-600 text-white hover:bg-blue-500"
                : ["/", "*", "-", "+"].includes(btn) ? "bg-gray-800 text-blue-400 hover:bg-gray-700"
                : "bg-gray-800 text-gray-200 hover:bg-gray-700"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}