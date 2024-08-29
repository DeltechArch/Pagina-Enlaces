import React from 'react';

export const ListaDeLinks = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-black p-4'>
      <div className='text-center mb-4'>
        <h2 className='text-2xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>
          🌐 Redes Sociales 🌟
        </h2>
      </div>
      <ul className='grid grid-cols-3 gap-4 p-4 justify-items-center items-center bg-black md:w-full md:mx-auto md:grid-cols-3'>
        <li className='flex justify-center'>
          <a href='https://github.com/DeltechArch'>
            <img src="./assets/github.svg" alt="github logo" className='w-8 h-8 md:w-12 md:h-12' />
          </a>
        </li>
        <li className='flex justify-center'>
          <a href='https://www.tiktok.com/@deltecharch'>
            <img src="./assets/tiktok.svg" alt="tiktok logo" className='w-8 h-8 md:w-12 md:h-12' />
          </a>
        </li>
        <li className='flex justify-center'>
          <a href="https://www.youtube.com/channel/UCipJ9FqdaM7ZmXtInVIfRqw">
            <img src="./assets/yuotube.svg" alt="youtube logo" className='w-8 h-8 md:w-12 md:h-12' />
          </a>
        </li>
      </ul>
    </div>
  );
};
