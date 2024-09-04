import React from 'react';
import { Proyecto } from './Proyecto';

export const ListaDeProyectos = () => {
  return (
    <section className='bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md mt-8 mb-40 px-4'>
      <h2 className='text-3xl text-center font-bold bg-gradient-to-r from-purple-700 to-blue-700 text-green-400 mb-8 p-4 rounded-lg shadow-lg'>
        Proyectos Personales
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
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

      
      </div>
    </section>
  );
};
