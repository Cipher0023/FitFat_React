import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import "../../app/globals.css"
import Background from '@/components/background/Background';

export default function RootLayout({
    children,
}: Readonly<{children: React.ReactNode;
}>){
    return(
        <html lang="pt-BR">
            <body>
              <Background/>
              <div className="sticky top-0 z-100 "> {/* Adicione esta div wrapper */}
                <Navbar/>
              </div>
              {children}
            </body>
        </html>
    );
}