import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import SWRegistration from './SWRegistration';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi PWA",
  description: "Aplicación PWA con Next.js",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased pb-20`}>
        {children}
        
        {/* Menú de navegación inferior */}
        <nav className="fixed bottom-0 left-0 w-full bg-gray-900 p-4 flex justify-center gap-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
          <Link href="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
            Calculadora
          </Link>
          <Link href="/notas" className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition">
            Notas
          </Link>
        </nav>

        <SWRegistration />
      </body>
    </html>
  );
}