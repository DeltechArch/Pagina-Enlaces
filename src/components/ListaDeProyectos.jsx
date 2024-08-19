import React from 'react'
import { Proyecto } from './Proyecto'

export const ListaDeProyectos = () => {
  return (
    <>
      <section className=' grid grid-cols-1 justify-items-center space-y-3 mt-4 justify-center mb-32'>

        <h2 className=' text-2xl font-bold bg-black mb-4 p-4 shadow-lg shadow-cyan-300  '>💼Proyectos Personales🛜</h2>

        <Proyecto
          titulo='MyLista'

          descripcion="Una lista de mercado fundamental para tu próxima visita al supermercado."
          enlace='https://deltecharch.github.io/MyList/'
        />
        <Proyecto
          titulo='GestorFinanzas'

          descripcion="Este proyecto es un gestor de finanzas que actualmente registra únicamente ingresos y egresos."
          enlace='https://deltecharch.github.io/GestorFinanzas/'
        />



      </section>
    </>
  )
}
