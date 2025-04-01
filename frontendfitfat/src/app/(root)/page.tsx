import React from 'react';
import { Chakra_Petch } from 'next/font/google';

const chakra = Chakra_Petch({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

function Home() {
  return (
    <div className='flex flex-col min-h-screen justify-center items-center bg-gray-900'>
      <h1
        className={`
          m-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 ${chakra.className} font-bold text-9xl italic transition-all duration-300 shadow-amber-300
        `}
      >
        CUBIC developers
      </h1>
      <h2 className={`text-white mt-4 ${chakra.className} italic`}>
        O caminho para a digitalização da sua empresa
      </h2>

      <h3 className={`text-white m-4`}>Pruduzindo sites de e-commerce para atender todas 
        demandas comerciais da sua empresa. Criamos os canais de venda e 
        manejamos as demandas de marketing viabilizando as vendas digitais
        da sua empresa
      </h3>
    </div>
  );
}

export default Home;
