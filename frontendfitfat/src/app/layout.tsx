import React from 'react';
import "../app/globals.css"


export default function RootLayout({
    children,
}: Readonly<{children: React.ReactNode;
}>){
  return(
    <html lang="pt-BR">
      <body className='bg-gradient-to-br from-gray-950 via-indigo-950 to-sky-500'>
        {children}
        <footer>
          <p>
            teste de footer
          </p>
        </footer>
      </body>
    </html>
  );
}