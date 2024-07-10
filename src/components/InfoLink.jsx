import React from 'react'

export const InfoLink = (props) => {
  return (

    <li 
    className=' flex justify-around mx-auto h-20 items-center border-2 border-cyan-300   w-72 p-2 rounded-full bg-black hover:text-black hover:bg-cyan-300'>

      <p className='font-bold text-2xl uppercase'>{props.texto}</p>
      <a href={props.enlace}>
        <img src={props.imagenSrc} alt="logotipo" />
      </a>
    </li >


  )
}
