import React from 'react';
import {Poppins} from "next/font/google";
import Navbar from '@/components/Nabar';
import "../app/globals.css"



const poppins = Poppins({
    subsets:["latin"],
    weight:[
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
    ]
})



export default function RootLayout({
    children,
}: Readonly<{children: React.ReactNode;
}>){
    return(
        <html lang="pt-BR">

            <body className={poppins.className}>
              <Navbar/>
                {children}
            </body>
        </html>
    );
}