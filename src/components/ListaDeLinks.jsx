import React from 'react'


export const ListaDeLinks = () => {
  return (

    <ul className='fixed bottom-0 left-0 right-0 grid grid-cols-3 gap-4 p-4 justify-items-center items-center bg-black md:max-w-3xl mx-auto'>
      <li><a href='https://github.com/DeltechArch'> <img src="./assets/github.svg" alt="github logo" /></a></li>
      <li><a href='https://www.tiktok.com/@deltecharch'><img src="./assets/tiktok.svg" alt="tiktok logo" /> </a></li>
      <li><a href="https://www.youtube.com/channel/UCipJ9FqdaM7ZmXtInVIfRqw"><img src="./assets/yuotube.svg" alt="yuotube logo" /></a>  </li>

    </ul>
  )
}
