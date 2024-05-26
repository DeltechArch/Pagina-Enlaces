import React from 'react'
import { InfoLink } from './InfoLink'

export const ListaDeLinks = () => {
  return (
    
    <ul className=' mt-5 grid grid-cols-1 gap-y-3 '>
    
      <InfoLink
        texto='Git-Hub'
        imagenSrc='./assets/github.svg'
        enlace='https://github.com/DeltechArch'
      />

      <InfoLink
        texto='tik-tok'
        imagenSrc='./assets/tiktok.svg'
        enlace='https://www.tiktok.com/@deltecharch'
      />
       <InfoLink
        texto='YouTube'
        imagenSrc='./assets/yuotube.svg'
        enlace='https://www.youtube.com/channel/UCipJ9FqdaM7ZmXtInVIfRqw'
      />


    </ul>
  )
}
