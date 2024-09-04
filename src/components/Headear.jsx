import React from 'react';

export const Headear = () => {
  return (
    <header className='fixed top-0 left-0 right-0 flex items-center justify-center bg-black h-20 p-4 z-50'>
      <span className='flex-shrink-0'>
        <img className='h-16 w-auto' src="./logotipo.png" alt="Logotipo" />
      </span>

      <div className='bg-transparent border-4 border-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-2 ml-4'>
        <h1 className='text-center text-3xl font-black text-white'>
          <span className='text-purple-800'>Del</span>
          <span className='text-red-700'>Tech</span>
          <span className='text-cyan-300'>Arch</span>
        </h1>
      </div>
    </header>
  );
}
