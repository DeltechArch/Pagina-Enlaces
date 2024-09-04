import React from 'react';

export const Proyecto = (props) => {
  return (
    <article className='flex flex-col sm:flex-row w-full max-w-lg bg-gray-900 p-6 gap-4 border-2 border-pink-400 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
      <div className='flex-shrink-0 sm:w-1/3'>
        <img 
          src={props.image} 
          alt="imagen de app" 
          className='w-full h-48 object-cover rounded-lg shadow-md border border-purple-500' 
        />
      </div>
      <div className='flex flex-col justify-between sm:w-2/3'>
        <h3 className='text-green-400 border-b-4 border-blue-500 text-2xl font-bold mb-2'>{props.titulo}</h3>
        <p className='text-gray-300 font-medium text-base mb-4'>{props.descripcion}</p>
        <a 
          className='w-full h-12 flex items-center justify-center text-black font-semibold bg-yellow-400 hover:bg-yellow-500 transition-colors rounded-md' 
          href={props.enlace}
        >
          Ir a Proyecto
        </a>
      </div>
    </article>
  );
}
