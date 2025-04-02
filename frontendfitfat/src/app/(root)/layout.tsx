import React from 'react';
import Navbar from '@/components/Navbar';
import "../../app/globals.css"

export default function RootLayout({
    children,
}: Readonly<{children: React.ReactNode;
}>){
    return(
        <html lang="pt-BR">
            <body>
              <div className="sticky top-0 "> {/* Adicione esta div wrapper */}
                <Navbar/>
              </div>
              {children}
            </body>
        </html>
    );
}