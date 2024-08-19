import React from 'react'

export const Proyecto = (props) => {


  return (

    <>
      <article className=' grid grid-cols-1 justify-items-center items-center w-72 h-72  p-2 gap-y-2  bg-black border-2 border-cyan-300'>

        <h3 className=' text-purple-800  text-4xl font-black'>{props.titulo}</h3>

        <p className='p-1 font-black text-xl'>{props.descripcion}</p>
        <a className=' h-12 p-4 text-center font-mono text-black bg-red-700' href={props.enlace}>Ir a Proyecto</a>
      </article>
    </>
  )
}
