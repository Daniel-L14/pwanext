import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import SWRegistration from './SWRegistration';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Herramientas PWA",
  description: "Proyecto Final PWA",
  manifest: "/manifest.json",
  themeColor: "#111827",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased pb-24 bg-gray-900`}>
        
        {children}
        
        {/* Dock de Navegación Estilo Premium */}
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-950/80 backdrop-blur-md px-6 py-4 flex gap-6 rounded-3xl shadow-2xl border border-gray-800/50 w-[90%] max-w-sm justify-center z-50">
          <Link href="/" className="flex flex-col items-center gap-1 group">
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <span className="text-lg">🧮</span>
            </div>
            <span className="text-[10px] text-gray-400 font-medium tracking-wide uppercase group-hover:text-white transition-colors">Cálculo</span>
          </Link>
          
          <div className="w-[1px] h-10 bg-gray-800 self-center"></div>

          <Link href="/notas" className="flex flex-col items-center gap-1 group">
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
              <span className="text-lg">🎓</span>
            </div>
            <span className="text-[10px] text-gray-400 font-medium tracking-wide uppercase group-hover:text-white transition-colors">Notas</span>
          </Link>
        </nav>

        <SWRegistration />
      </body>
    </html>
  );
}