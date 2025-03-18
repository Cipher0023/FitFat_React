import { ReactNode } from 'react';


export const metadata = {
  title: 'Manager space',
  description: 'page dedicated to manage the website products and results',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-gray-50">






        {/* Conteúdo Principal */}
        <main className="flex-1">{children}</main>

      </body>
    </html>
  );
}