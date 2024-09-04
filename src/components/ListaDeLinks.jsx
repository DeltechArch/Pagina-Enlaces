import React from 'react';

const enlaces = [
  { nombre: 'GitHub', url: 'https://github.com/DeltechArch', icon: './assets/github.svg' },
  { nombre: 'TikTok', url: 'https://www.tiktok.com/@deltecharch', icon: './assets/tiktok.svg' },
  { nombre: 'YouTube', url: 'https://www.youtube.com/channel/UCipJ9FqdaM7ZmXtInVIfRqw', icon: './assets/youtube.svg' }
];

export const ListaDeLinks = () => {
  return (
    <div className='bg-black p-4'>
      <div className='text-center mb-4'>
        <h2 className='text-2xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>
          🌐 Redes Sociales 🌟
        </h2>
      </div>
      <ul className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {enlaces.map((link, index) => (
          <li key={index} className='flex justify-between items-center'>
            <a 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='flex items-center w-full p-4 rounded-lg bg-white/20 border border-white/30 backdrop-blur-md hover:bg-white/30 transition-colors'
            >
              <span className='text-white font-semibold mr-3'>{link.nombre}</span>
              <img src={link.icon} alt={`${link.nombre} logo`} className='w-8 h-8' />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
