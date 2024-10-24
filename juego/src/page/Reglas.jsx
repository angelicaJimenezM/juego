import React from 'react';
import reglas from '../assets/Icons/reglas.png';

export const Reglas = ({ onClose }) => {

  if (typeof onClose !== 'function') {
    console.warn('onClose prop must be a function');
  }

  const reglasJuego = [
    "1 Pregunta por persona",
    "Las preguntas se tienen que responder con un sí o un no",
    "Pregunta de características o un accesorio que usen",
    "Cuando creas saber quién es el personaje de tu oponente, di su nombre",
    "Si te equivocas, pierdes",
  ];

  return (
    <div className="bg-slate-400 bg-opacity-75 h-screen w-screen flex justify-center items-center">
      <img 
        src={reglas} 
        alt="Icono para cerrar las reglas" 
        className="absolute xl:left-1/3 left-0 xl:top-16 top-16 xl:w-32 w-24 cursor-pointer " 
        onClick={onClose} 
      />
      <main className="bg-slate-50 w-full max-w-md h-3/4 rounded-xl xl:p-8 p-4">
        <h1 className="xl:text-4xl text-4xl font-lonely-coffee text-right xl:mb-4">Reglas del juego</h1>
        <ul className="list-disc xl:pl-5 pl-14 xl:pt-14 pt-10 xl:text-2xl text-2xl flex flex-col xl:gap-2 gap-1">
          {reglasJuego.map((regla, index) => (
            <li key={index} className="font-bold ">{regla}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};
