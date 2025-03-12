import { ReactNode } from 'react';
import './globals.css';
import Link from 'next/link'

export const metadata = {
  title: 'Next.js + Tailwind v4',
  description: 'Um projeto básico com Next.js e Tailwind CSS v4',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold text-blue-600">Logo</h1>
              <div className="space-x-4">
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
                <Link href="/login" className="text-gray-600 hover:text-blue-600 transition-colors">Login</Link>
                <Link href="/contato" className="text-gray-600 hover:text-blue-600 transition-colors">Contato</Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Conteúdo Principal */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white mt-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="text-center md:text-left">
              <p className="text-sm">
                © {new Date().getFullYear()} Meu Projeto. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}