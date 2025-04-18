import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center bg-gray-800 w-full min-h-screen p-10'>
      <div> 
        <p className='text-6xl text-white m-4' >
          Sobre nós
        </p>
      </div>
      <div className='flex flex-row justify-center flex-wrap'>
        <div className='p-4 flex flex-col items-center'>
          {/* as imagens de teste devem ficar na pasta public*/}
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
          src="/fotoSeuba.jpg" 
          alt="Foto de Bruno Seuba" 
          className="w-40 h-40 object-cover rounded-full"
          />
          <p className="font-comic text-white" style={{ fontFamily: "'Comic Sans MS', cursive" }}>  
            Bruno Alexandrino
          </p>
        </div>
        <div className='p-4 flex flex-col items-center'>
          <img 
          src="/fotoluca.png" 
          alt="Foto de LucaLoucura" 
          className="w-40 h-40 object-cover rounded-full"
          />
          <p className="font-comic text-white" style={{ fontFamily: "'Comic Sans MS', cursive" }}>  
            Luca Giacaglia 
          </p>
        </div>
        <div className='p-4 flex flex-col items-center'>
          <img 
          src="/placeholder.jpg" 
          alt="Foto de Luis" 
          className="w-40 h-40 object-cover rounded-full"
          />
          <p className="font-comic text-white" style={{ fontFamily: "'Comic Sans MS', cursive" }}>  
            Luis Guloso
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center w-full max-w-3xl">
          <p
          className="text-white text-justify "
          style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '18px',
            lineHeight: '1.7'
          }}
          >
            A empresa Cubic é uma startup de tecnologia formada por estudantes da cidade de São Carlos, interior do estado de São Paulo. Temos o objetivo de espalhar a inovação dos tempos atuais para microempresas, pequeno e médios empresários nas quais gostariam de se integrar no mercado digital amparado por especialistas no assunto.
            <br /><br />
            Tendo uma proposta afetuosa de acompanhamento, iremos contribuir para seu negócio com consultoria informacional, personalização de layouts digitais para atender à demanda produzida pelo nicho mercadológico, gerenciamento de interfaces de dados com a administração da mão-de-obra e a integração operacional entre os componentes do seu negócio.
            <br /><br />
            Nosso diferencial é a abordagem do problema, onde, através de didatismo e longanimidade, será manuseado de forma na qual o cliente terá acesso ao tecnicismo envolvido e também independência e preparo para tornar seu decoro uma realidade.
          </p>
        </div>
        <div> 
        <p className='text-5xl text-white m-4' >
          Pense fora da caixa, seja Cubic!
        </p>
      </div>
      </div>
    </div>
  )
}

export default page
