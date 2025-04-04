"use client"

import React from 'react';
import { Chakra_Petch } from 'next/font/google';
import Cube3D from '@/components/cube/cube';
import {Canvas} from "@react-three/fiber";
import Scene from "@/components/ThreeScene/Scene";

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
          <h1 className={`text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 ${chakra.className} font-bold sm:text-[4em] md:text-[em] lg:text-[13em] italic transition-all duration-300`}>
            CUBIC developers
          </h1>
          <div className="flex items-center justify-center bg-amber-400 sm:w-[5em] sm:h-[20em] md:h-[10em] md:w-[5em] lg:h-[25em] lg:w-[25em] text-[1em] md:text-[1.5em]">
            <div className=" bg-red-500">
              <Cube3D />
            </div>
          </div>
        </div>
        
        <h2 className={`text-white mt-6 text-xl md:text-2xl ${chakra.className} italic`}>
          O caminho para a digitalização da sua empresa
        </h2>
      </div>

      <div className="scroll-container flex flex-row items-center justify-center bg-emerald-900 m-4 w-3/5 aspect-square">
        <p className="absolute text-white">
          quadro de testes
        </p>

        <div className='canvas-container'>
          <Canvas>
            <Scene/>
          </Canvas>

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