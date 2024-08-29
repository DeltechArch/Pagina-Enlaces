import React from 'react';

export const Headear = () => {
  return (
    <header className='flex justify-center items-center bg-black shadow-lg shadow-cyan-300 h-20'>
      <span>
        <img className='h-20 w-full p-2' src="./logotipo.png" alt="Logotipo" />
      </span>

      <div className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-2'>
        <h1 className='text-center text-3xl font-black'>
          <span className='text-purple-800'>Del</span>
          <span className='text-red-700'>Tech</span>
          <span className='text-cyan-300'>Arch</span>
        </h1>
      </div>
    </header>
  );
}