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
      <div className="bg-fuchsia-500-0 m-4 flex flex-col items-center">
        <div className="flex bg-emerald-400-0 items-center">

          <h1 className={`
            ${chakra.className} font-bold sm:text-[6em] md:text-[7em] lg:text-[13em] italic
            text-transparent
            bg-clip-text 
            bg-gradient-to-r from-white to-gray-400    
          `}>
            CUBIC developers
          </h1>

          <div className="flex bg-red-500-0 w-2/5 aspect-square items-center justify-center">
          <Cubic/>
          </div>

        </div>
        
        <h2 className={`text-white m-4 mt-6 md:text-3xl ${chakra.className} italic`}>
          Tecnologia que Impulsiona seu Negócio: Soluções completas para pequenas e médias empresas
        </h2>

        <p className={`text-xl m-4 text-white ${chakra.className}` }>
            Oferecemos ferramentas digitais, suporte técnico e estratégias inteligentes para você vender mais, 
            organizar sua operação e crescer com segurança.
        </p>
      </div>

      <div className='flex flex-col m-4 text-white text-center'>

        <p className="text-2xl">
        Sobre nós  
        </p>

        <p className="text-white">
          Na Cubic, somos especialistas em transformar desafios de pequenos negócios em oportunidades digitais.
          Atuamos no local do seu negócio para entender suas necessidades e oferecer soluções personalizadas, 
          desde a criação de sites e gestão de redes sociais até sistemas de gestão (ERP/CRM) e consultoria em Inteligência Artificial.
          Nosso objetivo? *Simplificar a tecnologia para você focar no que realmente importa: seu cliente.
        </p>
      </div>

      <section className=" text-center">
        <p className="text-white md:text-3xl">
          Serviços
        </p>

        <div className='text-white'>
          <p>
            Criação de sites:
          </p>
          <p>
            Venda 24h por dia, mesmo quando sua loja está fechada.
          </p>
          <ul>
            <li>Sites responsivos e otimizados para vendas online.</li>
            <li>Integração com meios de pagamento e gestão de estoque.</li>
            <li>Design profissional que reflete a identidade da sua marca.</li>

          </ul>
        </div>

        <p>
          
        </p>
        <p>
          
        </p>
        <p>
          
        </p>
        <p>
          
        </p>
      </section>

      <div className="scroll-container flex flex-row items-center justify-center bg-emerald-900 m-4 w-3/5 aspect-square">
    

        <div className='w-full z-1'>  
          <TelaTheejs/>
        </div>

      </div>

    </main>
  );
}

export default Home;