import React from 'react'

function Home() {
  return (

    <div
    className="hero min-h-screen"
    style={{
      backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
    }}>
    <div className="hero-overlay"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        <p className="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>

    <div className="bg-deepblue container">
      <h1 className="text-5x1 font-bold text-white"> This is tailwindCSS V4</h1>
      <button className= "bg-amber text-alabaster border-4 text-2x1 font-bold mt-12 rounded px-6 py-4">
        Click here!
      </button>

      <input 
        type="text" 
        placeholder='Enter your name' 
        className="bg-white text-lg text-amber border-2 p-4 rounded ml-4 outline-0"
      />

      <button className="btn"> Default</button>

    </div>
    </div>
  )
}

export default Home