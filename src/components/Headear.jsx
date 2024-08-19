import React from 'react'


export const Headear = () => {
  return (
    <header className=' flex  justify-center bg-black shadow-lg shadow-cyan-300 h-20 '>
      <span><img className='h-20 w-full p-2'  src="./logotipo.png" alt="Logotipo" />
      </span>

      <h1 className=' text-center  text-3xl w-full font-black p-4 '>
        <span className=' text-purple-800'>Del</span>
        <span className=' text-red-700'>Tech</span>
        <span className=' text-cyan-300'>Arch</span>

      </h1>
    </header>

  )
}
