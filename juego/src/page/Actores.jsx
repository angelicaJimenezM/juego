import React, { useState, useEffect } from 'react';
import adam_sandler from '../assets/Image/actores/adam_sandler.png';
import chris from '../assets/Image/actores/chris.png';
import angelina from '../assets/Image/actores/angelina_jolie.png';
import Johnny_Depp from '../assets/Image/actores/Johnny_Depp.png';
import julia_roberts from '../assets/Image/actores/julia_roberts.png';
import kevin_hart from '../assets/Image/actores/kevin_hart.png';
import mario_casas from '../assets/Image/actores/mario_casas.png';
import Melissa from '../assets/Image/actores/Melissa.png';
import Morgan_Freeman from '../assets/Image/actores/Morgan_Freeman.png';
import roca from '../assets/Image/actores/roca.png';
import ryan_reynolds from '../assets/Image/actores/ryan_reynolds.png';
import willi from '../assets/Image/actores/willi_smith.png';
import Zendaya from '../assets/Image/actores/Zendaya.png';
import Hailee_Steinfeld from '../assets/Image/actores/Hailee_Steinfeld.png';
import jenna from '../assets/Image/actores/jenna_ortega.png';
import re_intentar from '../assets/Icons/re_cargar.png';
import { Boton } from '../components/Boton';

const actores = [
  { src: adam_sandler, alt: 'Adam Sandler', name: 'Adam Sandler', numero: 1 },
  { src: Hailee_Steinfeld, alt: 'Hailee Steinfeld', name: 'Hailee Steinfeld', numero: 2 },
  { src: Johnny_Depp, alt: 'Johnny Depp', name: 'Johnny Depp', numero: 3 },
  { src: Melissa, alt: 'Melissa', name: 'Melissa', numero: 4 },
  { src: Morgan_Freeman, alt: 'Morgan Freeman', name: 'Morgan Freeman', numero: 5 },
  { src: Zendaya, alt: 'Zendaya', name: 'Zendaya', numero: 6 },
  { src: angelina, alt: 'Angelina Jolie', name: 'Angelina Jolie', numero: 7 },
  { src: chris, alt: 'Chris', name: 'Chris', numero: 8 },
  { src: jenna, alt: 'Jenna Ortega', name: 'Jenna Ortega', numero: 9 },
  { src: julia_roberts, alt: 'Julia Roberts', name: 'Julia Roberts', numero: 10 },
  { src: kevin_hart, alt: 'Kevin Hart', name: 'Kevin Hart', numero: 11 },
  { src: roca, alt: 'La Roca', name: 'La Roca', numero: 12 },
  { src: mario_casas, alt: 'Mario Casas', name: 'Mario Casas', numero: 13 },
  { src: ryan_reynolds, alt: 'Ryan Reynolds', name: 'Ryan Reynolds', numero: 14 },
  { src: willi, alt: 'Will Smith', name: 'Will Smith', numero: 15 },
];


const ImageCard = ({ src, alt, name, numero }) => {
  const [showImage, setShowImage] = useState(true);

  const handleClick = () => {
    setShowImage(false);
  };

  return (
    <div
      className="estilo rounded-lg overflow-hidden transform skew-y-2 xl:text-2xl text-xs"
      onClick={handleClick}
    >
      {showImage ? (
        <>
          <img src={src} alt={alt} className="tam w-full mask" />
          <div className="flex flex-row justify-around">
            <p className="xl:text-3xl font-lonely-coffee">{name}</p>
            <p className="xl:text-3xl ">{numero}</p>
          </div>
        </>
      ) : (
        <div
          className="bg-white h-full w-full flex items-center justify-center"
          style={{ transition: '.3s ease' }}
        >
          <h1 className="xl:text-8xl text-6xl font-this-cafe">X</h1>
        </div>
      )}
    </div>
  );
};

const getRandomNumber = () => {
  return Math.floor(Math.random() * actores.length) + 1; 
};

export const Actores = () => {
  const [randomActor, setRandomActor] = useState(null);

  const getRandomActor = () => {
    const randomNumber = getRandomNumber();
    const resultado = actores.find(actor => actor.numero === randomNumber);
    setRandomActor(resultado);
  };

  useEffect(() => {
    getRandomActor();
  }, []);

  return (
    <div className='bg-gradient-to-t from-naranja to-amarillo'>
      {randomActor && (
        <div className="flex flex-col xl:w-96 xl:mx-auto">
          <img src={randomActor.src} alt={randomActor.alt} className='xl:h-80  h-96 mask'/>
          <p className='text-3xl flex justify-center font-lonely-coffee'>{randomActor.name}</p>
        </div>
      )}
     <div className="flex flex-row xl:gap-x-5 gap-24">
        <Boton />
        <h1 className="xl:text-8xl text-4xl xl:mx-auto font-bold">Actores</h1>
        <button onClick={getRandomActor}>
          <img src={re_intentar} alt="Reintentar" className="xl:w-20 w-14" />
        </button>
      </div>
      <main className="grid xl:grid-cols-5 grid-cols-3 xl:gap-4 gap-3 text-center mx-4">
        {actores.map((actor) => (
          <ImageCard key={actor.numero} src={actor.src} alt={actor.alt} name={actor.name} numero={actor.numero} />
        ))}
      </main>
    </div>
  );
};
