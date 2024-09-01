import React from 'react';
import { Proyecto } from './Proyecto';

export const ListaDeProyectos = () => {
  return (
    <>
      <section className='grid grid-cols-1 justify-items-center gap-6 mt-8 mb-40 px-4'>
        <h2 className='text-3xl text-center font-bold bg-gradient-to-r from-purple-700 to-blue-700 text-white mb-8 p-4 rounded-lg shadow-lg'>
          💼 Proyectos Personales 🛜
        </h2>

        <Proyecto
          titulo='Habit Tracking'
          image='./habit-tracking.svg' 
          descripcion='Una aplicación para gestionar y seguir tus hábitos, permitiéndote crear, seguir y eliminar hábitos a lo largo del tiempo.'
          enlace='https://deltecharch.github.io/Habit-Tracking/'
        />


        <Proyecto
          titulo='MyLista'
          image='./milista.svg'
          descripcion='Una lista de mercado fundamental para tu próxima visita al supermercado.'
          enlace='https://deltecharch.github.io/MyList/'
        />
        <Proyecto
          titulo='GestorFinanzas'
          image='./finanzas.svg'
          descripcion='Este proyecto es un gestor de finanzas que actualmente registra únicamente ingresos y egresos.'
          enlace='https://deltecharch.github.io/GestorFinanzas/'
        />
      </section>
    </>
  );
}
