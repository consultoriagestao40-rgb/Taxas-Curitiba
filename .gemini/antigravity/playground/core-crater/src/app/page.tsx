
"use client";

import Image from "next/image";
import RateTable from "@/components/RateTable";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white font-sans selection:bg-yellow-400 selection:text-blue-900">
      {/* Hero Section */}
      <section className="relative w-full py-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581578731117-e0d7424141d5?q=80&w=3464&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="relative z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
            <span className="block text-white">TAXAS UP!</span>
            <span className="block text-yellow-400">SERVIÇOS</span>
          </h1>
          <div className="inline-block bg-yellow-400 text-blue-900 px-8 py-2 rounded-full transform -rotate-2 shadow-xl mt-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">Vaga para taxa</h2>
          </div>
        </div>
      </section>

      {/* Content Container */}
      <div className="container mx-auto px-4 pb-20 max-w-4xl relative z-10">

        {/* Requirements Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-xl border border-white/10 animate-fade-in-up delay-100">
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400 border-b border-white/20 pb-2 inline-block">Requisitos:</h3>
          <ul className="space-y-4 text-lg md:text-xl text-gray-100 leading-relaxed list-none">
            <li className="flex items-start">
              <span className="mr-3 text-yellow-400">❖</span>
              Responsabilidade, pontualidade e comprometimento;
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-yellow-400">❖</span>
              Experiência prévia na área;
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-yellow-400">❖</span>
              <span>Carga horária: <span className="text-gray-400 text-base">(será divulgado no canal de conversa)</span></span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-yellow-400">❖</span>
              <span>Local de trabalho: <span className="text-gray-400 text-base">(será divulgado no canal de conversa)</span></span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-yellow-400">❖</span>
              <span>Valor da taxa: <span className="text-gray-400 text-base">(depende da carga horária)</span></span>
            </li>
          </ul>
        </div>

        {/* Rates Table Section */}
        <div className="mb-16 animate-fade-in-up delay-200">
          <RateTable />
        </div>

        {/* CTA Section */}
        <div className="text-center animate-bounce-subtle delay-300">
          <p className="mb-6 text-xl text-gray-300 font-light">Entre no grupo agora mesmo e garanta sua vaga!</p>
          <a
            href="https://chat.whatsapp.com/CrFnCXEKNwx4IGvGa4RHAH?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold text-2xl py-4 px-12 rounded-full shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 group"
          >
            <span className="mr-3">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.969.585 1.809.896 2.796.896 3.181 0 5.767-2.587 5.767-5.766 0-3.181-2.587-5.767-5.767-5.782zm8.854-1.809c-1.424-1.92-3.667-3.047-6.071-3.047-4.226 0-7.662 3.436-7.662 7.662 0 1.956.326 2.651 1.053 4.144L6 18.66l6.602-1.728c.639.176 1.483.428 2.283.428 4.227 0 7.663-3.436 7.663-7.662 0-2.046-.799-3.969-2.261-5.334l-.402-.401z" />
              </svg>
            </span>
            CLICK AQUI
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-sm text-gray-400 border-t border-white/10 pt-8">
          <p>&copy; {new Date().getFullYear()} Taxas UP! Serviços. Todos os direitos reservados.</p>
        </footer>
      </div>
    </main>
  );
}
