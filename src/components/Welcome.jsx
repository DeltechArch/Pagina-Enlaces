import React from 'react';

export const Welcome = () => {
  return (
    <div className='mt-16 p-6  shadow-lg flex items-center justify-center text-center'>
      {/* Contenedor del Cuadro */}
      <div className='bg-white/10 p-6 rounded-lg shadow-md backdrop-blur-md flex flex-col md:flex-row items-center md:items-start justify-center text-center md:text-left w-full max-w-4xl'>
        {/* Imagen y Datos Personales */}
        <div className='flex-shrink-0 mb-4 mx-4 md:mb-0'>
          <img
            src='./fotoperfil.png' // Asegúrate de poner la ruta correcta de tu foto
            alt='Juan Delgadillo'
            className='w-44 h-44 md:w-60 md:h-60 rounded-full border-4 border-white shadow-md object-cover'
          />

        </div>
        <div className='flex flex-col justify-center'>
          <h1 className='text-3xl md:text-5xl font-bold text-white mb-2'>Juan Delgadillo</h1>
          <p className='text-xl md:text-2xl text-white mb-4'>Web Developer Frontend</p>
          <p className='text-lg text-white'>
            Sigueme en mis redes Sociales. <br />
            Visita mis proyectos.
          </p>
        </div>
      </div>
    </div>
  );
};
