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
    <div className='flex min-h-screen justify-center place-items-start bg-gray-900'>
      <h1
        className={`
          text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600
          ${chakra.className} font-bold text-8xl italic
          drop-shadow-[0_0_15px_#3b82f6] hover:drop-shadow-[0_0_20px_#8b5cf6]
          transition-all duration-300
        `}
      >
        CUBIC developers
      </h1>
    </div>
  );
}

export default Home;