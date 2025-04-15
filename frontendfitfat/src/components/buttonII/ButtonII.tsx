import React from 'react'

type Props = object

export default function ButtonII({}: Props) {
  return (
    <div className = 'h-10 bg-amber-300'>
      <button className='w-full h-full border-2 border-white p-2 text-shadow-lg'
      >
        button
      </button>
    </div>
  )
}