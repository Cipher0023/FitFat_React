import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import "../../app/globals.css"

export default function RootLayout({
    children,
}: Readonly<{children: React.ReactNode;
}>){
    return(
        <html lang="pt-BR">
            <body>
              <div className="sticky top-0 z-10 "> {/* Adicione esta div wrapper */}
                <Navbar/>
              </div>
              {children}
            </body>
        </html>
    );
}