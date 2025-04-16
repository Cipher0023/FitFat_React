import React from 'react';
import "../app/globals.css"


export default function RootLayout({
    children,
}: Readonly<{children: React.ReactNode;
}>){
  return(
    <html lang="pt-BR">
      <body>
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