import PromoImages from '@/components/promoImages/PromoImages'
import React from 'react'

type Props = object

export default function page({}: Props) {


  return (
    <div className='flex flex-col w-full items-center aspect-square bg-gray-900 text-white'>
      <div className='flex flex-col items-left'>
        <h1 className='text-7xl font-bold m-4'>Blog do Luan</h1>
        <p className='text-2xl'>aqui falarei um pouco sobre o projeto e meus trabalhos, além de demonstá-los</p>
      </div>

      <div className='w-9/10 border-2 border-white text-center m-4 rounded-3xl p-4'>
        <p className='text-3xl m-4'>Componente de imagem</p>
        <p className='m-4 text-start'>
          meu primeiro componente de imagem
        </p>

        <div className='m-4'>
          <PromoImages src="negaomechendonopc.jpg" alt="foto de ia" isActive={true} />
        </div>

        <p className='m-4 text-start'>
          18/04/2025- O botão até que ficou legalzinho, mas sinceramente, muito aquém daquilo que eu tinha idealizado
        </p>

        <div className='m-4'>
          <ButtonIII/>
        </div>  
      </div>

      <div className='w-9/10 border-2 border-white text-center m-4 rounded-3xl p-4'>
        <p className='text-3xl m-4'>componente 2</p>
        <p className='m-4 text-start'>
          
        </p>
      </div>

    </div>
  )
}