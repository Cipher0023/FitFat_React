import BannerLarge from '@/components/banners/large/BannerLarge'
import React from 'react'

export default function page() {
  return (
    <div>
      <p>Produtos</p>

      <div className='m-2 flex flex-col items-center justify-evenly'>
        <p>Criação de sites</p>
        <BannerLarge/>
      </div>

      <div>
        <p>Gestão de Mídias Sociais e Marketing Digital:</p>
      </div>

      <div>
        <p>Sistemas de Gestão Online (ERP e CRM)</p>
      </div>

      <div>
        <p>Assistência Técnica em Informática</p>
      </div>

      <div>
        <p>Consultoria em Inteligência Artificial</p>
      </div>

      <div>
        <p>Entretenimento Digital</p>
      </div>


    </div>
  )
}
