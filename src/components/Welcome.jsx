import React from 'react';

export const Welcome = () => {
  return (
    <div className='grid grid-cols-1 justify-items-center text-center mx-auto mt-10 w-80 h-full p-6 gap-y-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-2 border-cyan-300 rounded-lg shadow-lg'>
      <h1 className='text-5xl font-bold text-white'>Welcome</h1>
      <p className='text-2xl text-white'>
        Visita mis proyectos 💼 <br />
        Y sígueme en mis redes sociales🌐
      </p>
    </div>
  );
};
