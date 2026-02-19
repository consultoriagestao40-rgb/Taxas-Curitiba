import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taxas Curitiba - Oportunidades Diárias",
  description: "Encontre oportunidades de taxas diárias em Curitiba e região. Pagamento simplificado e vagas todos os dias.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>{children}</body>
    </html>
  );
}
