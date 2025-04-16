import React from 'react'

const page = () => {
  return (
    <div className='flex flex-row justify-center p-10 bg-gray-800 w-full aspect-square'>
      <div className='p-4 flex flex-col items-center'>
        <img 
          src="/fotoDan.jpg" 
          alt="Foto de Daniel Silva Esparza" 
          className="w-40 h-40 object-cover rounded-full"
        />
        <p className="font-comic text-white" style={{ fontFamily: "'Comic Sans MS', cursive" }}>  
          Daniel Silva Esparza 
        </p>
      </div>
      <div className='p-4 flex flex-col items-center'>
        <img 
          src="/fotoLuan.jpg" 
          alt="Foto de Luan Sales " 
          className="w-40 h-40 object-cover rounded-full"
        />
        <p className="font-comic text-white" style={{ fontFamily: "'Comic Sans MS', cursive" }}>  
          Luan de Lima Sales
        </p>
      </div>
      <div className='p-4 flex flex-col items-center'>
        <img 
          src="/placeholder.jpg" 
          alt="Foto de Bruno Seuba" 
          className="w-40 h-40 object-cover rounded-full"
        />
        <p className="font-comic text-white" style={{ fontFamily: "'Comic Sans MS', cursive" }}>  
          Bruno Seuba
        </p>
      </div>
      <div className='p-4 flex flex-col items-center'>
        <img 
          src="/placholder.jpg" 
          alt="Foto de LucaLoucura" 
          className="w-40 h-40 object-cover rounded-full"
        />
        <p className="font-comic text-white" style={{ fontFamily: "'Comic Sans MS', cursive" }}>  
          Luca Jhakali 
        </p>
      </div>
      <div className='p-4 flex flex-col items-center'>
        <img 
          src="/placeholderr.jpg" 
          alt="Foto de Lucas Rezende" 
          className="w-40 h-40 object-cover rounded-full"
        />
        <p className="font-comic text-white" style={{ fontFamily: "'Comic Sans MS', cursive" }}>  
          Lucas Rezende
        </p>
      </div>
    </div>
  )
}

export default page
