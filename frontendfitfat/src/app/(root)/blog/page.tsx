import { ButtonII } from '@/components/buttonTypes/ButtonII'
import Logo from '@/components/logo/Logo'
import Link from 'next/link'
import React from 'react'

type Props = object

export default function page({}: Props) {
  return (
    <div className='flex flex-col w-full items-center aspect-square bg-gray-900 text-white'>

      <div className='flex flex-row items-center gap-4 h-20'>
        <p>
        Blog do Foguete
        </p>

        <Link href="/blog/blogDoFoguete">
          <ButtonII>Ir para blog </ButtonII>
        </Link>

        <Logo/>


      </div>

      <div className='flex flex-row items-center gap-4 h-20'>
        <p>
        Blog do Luan
        </p>

        <Link href="/blog/blogDoFoguete">
          <ButtonII>Ir para blog </ButtonII>
        </Link>
      </div>


    </div>
  )
}