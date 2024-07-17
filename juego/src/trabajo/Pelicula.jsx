import React, { useState, useEffect } from 'react';
import wanda from '../assets/Image/pelicula/wanda.png';
import loki from '../assets/Image/pelicula/Loki.png';
import hulk from '../assets/Image/pelicula/hulk.png';
import america from '../assets/Image/pelicula/america.png';
import aironman from '../assets/Image/pelicula/ironman.png';
import natasha from '../assets/Image/pelicula/natasha.png';
import spiderman from '../assets/Image/pelicula/spiderman.png';
import spiderman2 from '../assets/Image/pelicula/spiderman2.png';
import spiderman3 from '../assets/Image/pelicula/spiderman3.png';
import thanos from '../assets/Image/pelicula/thanos.png';
import thor from '../assets/Image/pelicula/thor.png';
import hokai from '../assets/Image/pelicula/hokai.png';
import strange from '../assets/Image/pelicula/strange.png';
import rocke from '../assets/Image/pelicula/rocket.png';
import vision from '../assets/Image/pelicula/vision.png';
import re_intentar from '../assets/Icons/re_cargar.png';
import { Boton } from './Boton';

const peliculas = [
  { src: wanda, alt: 'Wanda', name: 'Wanda', numero: 1 },
  { src: loki, alt: 'Loki', name: 'Loki', numero: 2 },
  { src: hulk, alt: 'Hulk', name: 'Hulk', numero: 3 },
  { src: america, alt: 'Capitan America', name: 'Cap America', numero: 4 },
  { src: aironman, alt: 'Ironman', name: 'Ironman', numero: 5 },
  { src: natasha, alt: 'Natasha', name: 'Natasha', numero: 6 },
  { src: spiderman, alt: 'Spiderman', name: 'Spiderman', numero: 7 },
  { src: spiderman2, alt: 'Spiderman 2', name: 'Spiderman 2', numero: 8 },
  { src: spiderman3, alt: 'Spiderman 3', name: 'Spiderman 3', numero: 9 },
  { src: thanos, alt: 'Thanos', name: 'Thanos', numero: 10 },
  { src: thor, alt: 'Thor', name: 'Thor', numero: 11 },
  { src: hokai, alt: 'Hokai', name: 'Hokai', numero: 12 },
  { src: strange, alt: 'Strange', name: 'Strange', numero: 13 },
  { src: rocke, alt: 'Rocket', name: 'Rocket', numero: 14 },
  { src: vision, alt: 'Vision', name: 'Vision', numero: 15 },
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
          <img src={src} alt={alt} className="tam2 sm:h-56 w-full" />
          <div className="flex flex-row justify-around">
            <p className="xl:text-3xl">{name}</p>
            <p className="xl:text-3xl">{numero}</p>
          </div>
        </>
      ) : (
        <div
          className="bg-white h-full w-full flex items-center justify-center"
          style={{ transition: '.3s ease' }}
        >
          <h1 className="xl:text-8xl text-6xl">X</h1>
        </div>
      )}
    </div>
  );
};


const getRandomNumber = () => {
  return Math.floor(Math.random() * peliculas.length) + 1; 
};

export const Pelicula = () => {
  const [randomPelicula, setRandomPelicula] = useState(null);

  const getRandomPelicula = () => {
    const randomNumber = getRandomNumber();
    const resultado = peliculas.find(pelicula => pelicula.numero === randomNumber);
    setRandomPelicula(resultado);
  };

  useEffect(() => {
    getRandomPelicula();
  }, []);

  return (
    <div>
      {randomPelicula && (
        <div className="flex flex-col xl:w-96 xl:mx-auto">
          <img src={randomPelicula.src} alt={randomPelicula.alt} className='xl:h-56 h-40'/>
          <p className='text-3xl flex justify-center'>{randomPelicula.name}</p>
        </div>
      )}
      <div className="flex flex-row xl:gap-x-5 gap-12">
        <Boton />
        <h1 className="xl:text-8xl text-4xl xl:mx-auto">Pelicula</h1>
        <button onClick={getRandomPelicula}>
          <img src={re_intentar} alt="Reintentar" className="xl:w-20 w-14" />
        </button>
      </div>
      <main className="grid xl:grid-cols-5 grid-cols-3 xl:gap-4 gap-3 text-center mx-4">
        {peliculas.map((pelicula) => (
          <ImageCard key={pelicula.numero} src={pelicula.src} alt={pelicula.alt} name={pelicula.name} numero={pelicula.numero} />
        ))}
      </main>
    </div>
  );
};
