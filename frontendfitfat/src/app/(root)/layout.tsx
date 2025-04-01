import React from 'react';
import Navbar from '@/components/Nabar';
import "../../app/globals.css"


export default function RootLayout({
    children,
}: Readonly<{children: React.ReactNode;
}>){
    return(
        <html lang="pt-BR">

            <body>
              <Navbar/>
                {children}
            </body>
        </html>
    );
}