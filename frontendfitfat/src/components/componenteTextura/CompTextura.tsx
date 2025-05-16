import React from 'react'

type Props = object

function CompTextura({}: Props) {
  return (
    <div className=' absolute flex w-full h-full inset-0 z-index'>
      <svg className='w-full h-full'>
        <defs>
          <filter id="textura">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.4"
              numOctaves="1"
              seed="1"
              result="turbulence"
            />
          </filter>
        </defs>

        <rect width="100%" height="100%" fill="gray" filter="url(#textura)" />
      </svg>
    </div>
  )
}

export default CompTextura