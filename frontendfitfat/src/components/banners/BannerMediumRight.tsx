import React from 'react'

type Props = {
  title: string;
  description: string;
  listItems: string[];
}

export default function BannerMediumRight({title,description,listItems}: Props) {
  return (
    <div className='text-white text-start m-4 flex flex-row'>
      <div className="flex flex-col justify-center items-center m-4">
        <p>
          {title}
        </p>
        <p>
          {description}
        </p>
        <ul className="list-disc pl-4">
          {listItems.map((item,index)=>(
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="bg-yellow-400 w-1/2 aspect-square text-black">
        quadrado direito
      </div>
    </div>
  )
}