import React from 'react'

type Props = object

export default function Logo({}: Props) {
  return (
    <div className='flex flex-row items-center'>

      <img 
        src="/isometric-cube.svg" 
        alt="logo Cubic" 
        className="w-15 aspect-square"
      />
      <p className='text-white'>
        Cubic
      </p>

    </div>
  )
}