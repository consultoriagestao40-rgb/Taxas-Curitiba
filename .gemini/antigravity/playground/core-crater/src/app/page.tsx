
"use client";

import RateTable from "@/components/RateTable";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gray-50 font-sans selection:bg-yellow-400 selection:text-blue-900">

      {/* Navbar Minimalista */}
      <nav className="w-full py-4 px-4 md:px-8 bg-blue-900 text-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-2xl font-black tracking-tighter text-white">TAXAS<span className="text-yellow-400">UP!</span></span>
          <a href="#vagas" className="hidden md:block text-sm font-bold bg-white/10 px-4 py-2 rounded hover:bg-white/20 transition">VAGAS DISPONÍVEIS</a>
        </div>
      </nav>

      {/* Hero Section - Foco Total na Ação */}
      <section className="relative w-full bg-gradient-to-b from-blue-900 to-blue-800 text-white py-12 md:py-20 px-4 overflow-hidden">
        {/* Background Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">

          {/* Texto e CTA */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in">
            <div className="inline-block bg-yellow-400 text-blue-900 font-extrabold text-sm md:text-base px-4 py-1 rounded-full uppercase tracking-wide mb-2 shadow-lg transform -rotate-1">
              🚀 Oportunidade Confirmada
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none drop-shadow-xl">
              VAGAS ABERTAS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">CURITIBA</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-medium max-w-xl mx-auto md:mx-0 leading-relaxed">
              Receba por dia. Pagamento rápido. Sem burocracia. Escolha seu turno e comece a faturar.
            </p>

            <div className="pt-4 flex flex-col items-center md:items-start">
              <a
                href="https://chat.whatsapp.com/CrFnCXEKNwx4IGvGa4RHAH?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="animate-pulse-fast bg-green-500 hover:bg-green-400 text-white border-b-8 border-green-700 active:border-b-0 active:translate-y-2 font-black text-2xl md:text-3xl py-6 px-8 md:px-12 rounded-2xl shadow-2xl transition-all duration-100 w-full md:w-auto flex items-center justify-center gap-3"
              >
                <span>👉 ENTRAR NO GRUPO</span>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
              </a>
              <p className="mt-3 text-yellow-300 text-sm font-semibold tracking-wide uppercase">⚡ Vagas limitadas - Entre agora!</p>
            </div>
          </div>

          {/* Tabela Flutuante - Direita */}
          <div className="flex-1 w-full max-w-md animate-fade-in delay-200">
            <div className="relative">
              <div className="absolute -inset-1 bg-yellow-400 rounded-2xl blur opacity-30 animate-pulse"></div>
              <div className="relative">
                <RateTable />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Requisitos em Destaque */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in delay-300">

          <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-colors shadow-sm hover:shadow-md">
            <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 text-3xl font-bold">
              🛠️
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Experiência</h3>
            <p className="text-gray-600">Ter atuado na área e conhecer o serviço.</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-colors shadow-sm hover:shadow-md">
            <div className="w-16 h-16 mx-auto bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4 text-3xl font-bold">
              ⏰
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pontualidade</h3>
            <p className="text-gray-600">Chegar no horário é o único segredo do sucesso.</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-colors shadow-sm hover:shadow-md">
            <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 text-3xl font-bold">
              🤝
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Compromisso</h3>
            <p className="text-gray-600">Marcou? Compareceu. Simples assim.</p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-center text-gray-400 border-t border-gray-800">
        <p className="font-medium">Up!Serviços &copy; {new Date().getFullYear()} - Gestão Inteligente de Facilities</p>
      </footer>
    </main>
  );
}
