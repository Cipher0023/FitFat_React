"use client"

import React from 'react';
import { Chakra_Petch } from 'next/font/google';
import { Cubic } from '@/components/cubeLogo/Cubic';
import { TelaTheejs } from '@/components/Tela3d/Tela3d';


const chakra = Chakra_Petch({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center bg-gray-900 p-6">
      {/* Container do título e cubo */}
      <div className="bg-fuchsia-500 flex flex-col items-center">
        <div className="flex bg-emerald-400 items-center">

          <h1 className={`
            ${chakra.className} font-bold sm:text-[6em] md:text-[5em] lg:text-[13em] italic
            text-transparent
            bg-clip-text 
            bg-gradient-to-r from-white to-gray-400    
          `}>
            CUBIC developers
          </h1>

          <div className="flex bg-red-500 w-1/2 aspect-square items-center justify-center text-[1em] md:text-[1.5em]">
          <Cubic/>
          </div>

        </div>
        
        <h2 className={`text-white mt-6 text-xl md:text-2xl ${chakra.className} italic`}>
          O caminho para a digitalização da sua empresa
        </h2>
      </div>

      <div className="scroll-container flex flex-row items-center justify-center bg-emerald-900 m-4 w-3/5 aspect-square">
      
        <p className="absolute text-white z-0">
          quadro de testes
        </p>

        <div className='w-full h-100 z-1'>  
          <TelaTheejs/>
        </div>

      </div>

      {/* Descrição */}
      <section className=" text-center">
        <p className="text-white text-lg md:text-xl">
          Produzindo sites de e-commerce para atender todas demandas comerciais da sua empresa. 
          Criamos os canais de venda e manejamos as demandas de marketing viabilizando 
          as vendas digitais da sua empresa.
        </p>
      </section>
    </main>
  );
}

export default Home;