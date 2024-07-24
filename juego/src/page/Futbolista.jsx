import React, { useState, useEffect } from 'react';
import cuadrado from '../assets/Image/futbolista/cuadrado.png';
import camilo_vargas from '../assets/Image/futbolista/camilo_vargas.png';
import daniel from '../assets/Image/futbolista/daniel_muñoz.png';
import David_Ospina from '../assets/Image/futbolista/David_Ospina.png';
import Gustavo_Puerta from '../assets/Image/futbolista/Gustavo_Puerta.png';
import james_rodriguez from '../assets/Image/futbolista/james_rodriguez.png';
import Jhon_arias from '../assets/Image/futbolista/Jhon_arias.png';
import jhon_cordoba from '../assets/Image/futbolista/jhon_cordoba.png';
import johan_mojica from '../assets/Image/futbolista/johan_mojica.png';
import luis_diaz from '../assets/Image/futbolista/luis_diaz.png';
import mateus_uribe from '../assets/Image/futbolista/mateus_uribe.png';
import richard_rios from '../assets/Image/futbolista/richard_rios.png';
import yerry_mina from '../assets/Image/futbolista/yerry_mina.png';
import devan from '../assets/Image/futbolista/devan.png';
import falcao from '../assets/Image/futbolista/falcao.png';
import re_intentar from '../assets/Icons/re_cargar.png';
import { Boton } from '../components/Boton';

const futbolistas = [
  { src: David_Ospina, alt: 'David Ospina', name: 'Ospina', numero: 1 },
  { src: Gustavo_Puerta, alt: 'Gustavo Puerta', name: 'Puerta', numero: 2 },
  { src: cuadrado, alt: 'Cuadrado', name: 'Cuadrado', numero: 3 },
  { src: Jhon_arias, alt: 'Jhon Arias', name: 'Arias', numero: 4 },
  { src: yerry_mina, alt: 'Yerry Mina', name: 'Yerry Mina', numero: 5 },
  { src: camilo_vargas, alt: 'Camilo Vargas', name: 'Vargas', numero: 6 },
  { src: richard_rios, alt: 'Richard Rios', name: 'Rios', numero: 7 },
  { src: daniel, alt: 'Daniel Muñoz', name: 'Muñoz', numero: 8 },
  { src: devan, alt: 'Devan', name: 'Devan', numero: 9 },
  { src: falcao, alt: 'Falcao', name: 'Falcao', numero: 10 },
  { src: james_rodriguez, alt: 'James Rodriguez', name: 'James', numero: 11 },
  { src: johan_mojica, alt: 'Johan Mojica', name: 'Mojica', numero: 12 },
  { src: jhon_cordoba, alt: 'Jhon Cordoba', name: 'Cordoba', numero: 13 },
  { src: luis_diaz, alt: 'Luis Diaz', name: 'Diaz', numero: 14 },
  { src: mateus_uribe, alt: 'Mateus Uribe', name: 'Mateus', numero: 15 },
];

const ImageCard = ({ src, alt, name, numero }) => {
  const [showImage, setShowImage] = useState(true);

  const handleClick = () => {
    setShowImage(false);
  };

  return (
    <div
      className='estilo pelicula rounded-lg overflow-hidden transform skew-y-2 xl:text-2xl text-xs'
      onClick={handleClick}
    >
      {showImage ? (
        <>
          <img src={src} alt={alt} className='h-32 w-full mask' />
          <div className="flex flex-row justify-around">
            <p className="xl:text-3xl font-lonely-coffee">{name}</p>
            <p className="xl:text-3xl">{numero}</p>
          </div>
        </>
      ) : (
        <div
          className='bg-white h-full w-full flex items-center justify-center'
          style={{ transition: '.3s ease' }}
        >
          <h1 className='xl:text-8xl text-6xl font-this-cafe'>X</h1>
        </div>
      )}
    </div>
  );
};

const getRandomNumber = () => {
  return Math.floor(Math.random() * 15) + 1;
};

export const Futbolista = () => {
  const [randomFutbolista, setRandomFutbolista] = useState(null);

  const getRandomFutbolista = () => {
    const randomNumber = getRandomNumber();
    const resultado = futbolistas.find(futbolista => futbolista.numero === randomNumber);
    setRandomFutbolista(resultado);
  };

  useEffect(() => {
    getRandomFutbolista();
  }, []);

  return (
    <div className='bg-gradient-to-t from-naranja to-amarillo'>
      {randomFutbolista && (
        <div className="flex flex-col xl:w-96 xl:mx-auto">
          <img src={randomFutbolista.src} alt={randomFutbolista.alt} className='xl:h-64  h-56 mask'/>
          <p className='text-3xl flex justify-center font-lonely-coffee'>{randomFutbolista.name}</p>
        </div>
      )}
      <div className="flex flex-row xl:gap-x-5 gap-24">
        <Boton />
        <h1 className="xl:text-8xl text-3xl xl:mx-auto font-bold">Futbolista</h1>
        <button onClick={getRandomFutbolista}>
          <img src={re_intentar} alt="Reintentar" className="xl:w-20 w-14" />
        </button>
      </div>
      <main className='grid xl:grid-cols-5 grid-cols-3 xl:gap-4 gap-3 text-center mx-2'>
        {futbolistas.map((futbolista) => (
          <ImageCard key={futbolista.numero} src={futbolista.src} alt={futbolista.alt} name={futbolista.name} numero={futbolista.numero} />
        ))}
      </main>
    </div>
  );
};
