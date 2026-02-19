
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
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">

      {/* Navbar Placeholder for Logo (Optional, based on "Clean Tech" vibe) */}
      <nav className="w-full py-6 px-4 md:px-8 max-w-5xl mx-auto flex justify-between items-center opacity-0 animate-fade-in">
        <span className="text-xl font-bold tracking-tighter text-gray-900">UP!<span className="text-blue-900">SERVIÇOS</span></span>
      </nav>

      <section className="flex-grow w-full max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Left Content: Hero Text */}
        <div className="flex-1 text-center md:text-left space-y-8 animate-fade-in delay-100">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 leading-tight">
              Taxas Diárias em <br className="hidden md:block" />
              <span className="text-blue-900">Curitiba e Região.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-light max-w-lg mx-auto md:mx-0 leading-relaxed">
              Oportunidades todos os dias com pagamento simplificado. Escolha seu turno e comece agora.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="https://chat.whatsapp.com/CrFnCXEKNwx4IGvGa4RHAH?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-white font-semibold text-lg py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              ENTRAR NO GRUPO DE WHATSAPP
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
            <p className="mt-4 text-xs text-gray-400">Clique para acessar o grupo oficial de vagas.</p>
          </div>
        </div>

        {/* Right Content: Floating Rate Card */}
        <div className="flex-1 w-full max-w-md animate-fade-in delay-200">
          <RateTable />
        </div>
      </section>

      {/* Feature Icons Section */}
      <section className="w-full bg-white border-t border-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in delay-200">

          <div className="space-y-3 p-4">
            <div className="w-12 h-12 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-gray-900 font-semibold">Experiência na Área</h3>
            <p className="text-gray-500 text-sm">Necessário conhecimento prévio para execução das tarefas.</p>
          </div>

          <div className="space-y-3 p-4">
            <div className="w-12 h-12 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-gray-900 font-semibold">Pontualidade</h3>
            <p className="text-gray-500 text-sm">Compromisso com os horários estipulados para cada turno.</p>
          </div>

          <div className="space-y-3 p-4">
            <div className="w-12 h-12 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-gray-900 font-semibold">Comprometimento</h3>
            <p className="text-gray-500 text-sm">Seriedade e dedicação na realização dos serviços.</p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 text-center text-sm text-gray-400 border-t border-gray-100">
        <p>Up!Serviços - Gestão Inteligente de Facilities</p>
      </footer>
    </main>
  );
}
