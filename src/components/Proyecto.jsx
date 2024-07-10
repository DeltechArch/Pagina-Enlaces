import React from 'react'

export const Proyecto = (props) => {






  return (

    <>
      <article className=' grid grid-cols-1 justify-items-center w-72  p-2 gap-y-2 rounded-xl bg-black border-2 border-cyan-300'>
        <h3 className='text-lg font-black'>{props.titulo}</h3>

        <p className='  p-1 rounded-md'>{props.descripcion}</p>
        <a className='  p-2 font-mono text-black bg-cyan-300' href={props.enlace}>Ir a Proyecto</a>
      </article>
    </>
  )
}
