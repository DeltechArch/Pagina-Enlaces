import React from 'react';

export const Proyecto = (props) => {
  return (
    <article className='grid grid-cols-1 justify-items-center items-center w-80 h-auto bg-gradient-to-r from-gray-800 to-black p-6 gap-y-4 border-2 border-cyan-300 rounded-lg shadow-2xl transition-transform transform hover:scale-105'>
      <h3 className='text-cyan-300 border-b-4 border-purple-600 text-3xl font-bold mb-2'>{props.titulo}</h3>
      <img 
        src={props.image} 
        alt="imagen de app" 
        className='w-72 h-72 object-cover rounded-md shadow-lg transition-transform transform hover:scale-105 border border-white' 
      />
      <p className='p-4 text-white font-semibold text-lg text-center'>{props.descripcion}</p>
      <a 
        className='w-full h-12 flex items-center justify-center text-white font-mono bg-purple-600 hover:bg-purple-800 transition-colors rounded-md' 
        href={props.enlace}
      >
        Ir a Proyecto
      </a>
    </article>
  );
}
