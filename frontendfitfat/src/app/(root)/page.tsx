"use client"

import React from 'react';
import { Chakra_Petch } from 'next/font/google';
import { Cubic } from '@/components/cubeLogo/Cubic';
import { TelaTheejs } from '@/components/Tela3d/Tela3d';
import BannerMediumLeft from '@/components/banners/BannerMediumLeft';
import BannerMediumRight from '@/components/banners/BannerMediumRight';


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
          Tecnologia que Impulsiona seu Negócio: Soluções de tecnologia completas para pequenas e médias empresas
        </h2>

        <p className={`text-xl m-4 text-white ${chakra.className}` }>
            Oferecemos ferramentas digitais, suporte técnico e estratégias inteligentes para você vender mais, 
            organizar sua operação e crescer com segurança.
        </p>
      </div>

      <div className='bg-white w-full'>division</div>

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

      <section className=" text-center ">
        <p className="text-white md:text-3xl">
          Serviços
        </p>

        <BannerMediumLeft
          title="Criação de sites:"
          description='Venda 24h por dia, mesmo quando sua loja está fechada.'
          listItems={[
            "Sites responsivos e otimizados para vendas online.",
            "Integração com meios de pagamento e gestão de estoque.",
            "Design profissional que reflete a identidade da sua marca."
          ]}
        />

        <BannerMediumRight
          title="Gestão de Mídias Sociais e Marketing Digital:"
          description='Aumente seu alcance e engajamento sem precisar postar uma única foto.'
          listItems={[
            "Criação de conteúdo estratégico para Instagram, Facebook e LinkedIn.",
            "Campanhas segmentadas no Google Ads e Meta Ads.",
            "Relatórios mensais de desempenho e ajustes em tempo real."
          ]}
        />

        <BannerMediumLeft
          title="Sistemas de Gestão Online (ERP e CRM)"
          description='Controle vendas, estoque e clientes em um único lugar.'
          listItems={[
            "Plataformas intuitivas para automatizar processos.",
            "Treinamento prático para sua equipe.",
            "Suporte técnico dedicado para dúvidas e ajustes."
          ]}
        />

        <BannerMediumRight
          title="Assistência Técnica em Informática"
          description='Problemas técnicos? Resolvemos rápido, sem complicação.'
          listItems={[
            "Reparo de computadores, impressoras e dispositivos.",
            "Instalação de softwares e configuração de redes.",
            "Planos de manutenção preventiva sob medida."
          ]}
        />

        <div className='text-white text-start m-4'>

          <p>
            Assistência Técnica em Informática
          </p>

          <p>
            Problemas técnicos? Resolvemos rápido, sem complicação.
          </p>

          <ul className="list-disc pl-4">
            <li>Reparo de computadores, impressoras e dispositivos.</li>
            <li>Instalação de softwares e configuração de redes.</li>
            <li>Planos de manutenção preventiva sob medida.</li>
          </ul>

        </div>

        <div className='text-white text-start m-4'>

          <p>
            Consultoria em Inteligência Artificial
          </p>

          <p>
          Use a IA a favor do seu negócio, mesmo sem entender de tecnologia
          </p>

          <ul className="list-disc pl-4">
            <li>Automação de atendimento via chatbots.</li>
            <li>Análise de dados para tomada de decisões estratégicas.</li>
            <li>Implementação de ferramentas de produtividade com IA generativa.</li>
          </ul>

        </div>

        <div className='text-white text-start m-4'>

          <p>
            Entretenimento Digital
          </p>

          <p>
            Surpreenda seus clientes com máquinas de arcade e jogos que atraem e fidelizam clientes à sua empresa!
          </p>

          <ul className="list-disc pl-4">
            <li>Quiosques interativos para lojas e eventos.</li>
            <li>Desenvolvimento de jogos personalizados para promoções.</li>
            <li>Soluções de realidade aumentada para branding.</li>
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