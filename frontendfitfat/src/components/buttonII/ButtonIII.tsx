"use client"
import React from 'react'
import { useState } from "react"

export interface NavItemInterface {
  url: string,
  label: string
  isActive?: boolean

}

export default function ButtonIII(props: NavItemInterface) {

  const [isPressed, setIsPressed] = useState(false)

  return (
    <li>
      <div className="relative inline-block">
        {/* area do botão*/}
        <div className='bg-black absolute inset-0  top-[4px] left-[3px] right-[-2px] bottom-[-4px] rounded-full '>
          {/* sombra */}
          aaa
        </div>
        <button
        className={cn (relative inline-flex items-center justify-center
        px-6 h-12 font-normal text-base
        select-none rounded-full
        bg-radial from-gray-100 from-40% to-gray-600
        shadow-sm
        transition-all duration-100 ease-out'
        >
          {/*elemento*/}
          teste
        </button>
      </div>
    </li>
  )
}