import React, { useState, useEffect } from 'react';
import wanda from '../../assets/Image/peliculas/avergers/wanda.png';
import loki from '../../assets/Image/peliculas/avergers/Loki.png';
import kate from '../../assets/Image/peliculas/avergers/kate.png';
import america from '../../assets/Image/peliculas/avergers/america.png';
import aironman from '../../assets/Image/peliculas/avergers/ironman.png';
import natasha from '../../assets/Image/peliculas/avergers/natasha.png';
import spiderman from '../../assets/Image/peliculas/avergers/spiderman.png';
import yelena from '../../assets/Image/peliculas/avergers/yelena.png';
import valkiria from '../../assets/Image/peliculas/avergers/valkiria.png';
import thanos from '../../assets/Image/peliculas/avergers/thanos.png';
import thor from '../../assets/Image/peliculas/avergers/thor.png';
import hokai from '../../assets/Image/peliculas/avergers/hokai.png';
import strange from '../../assets/Image/peliculas/avergers/strange.png';
import papper from '../../assets/Image/peliculas/avergers/pepper.png';
import vision from '../../assets/Image/peliculas/avergers/vision.png';
import re_intentar from '../../assets/Icons/re_cargar.png';
import { Boton_pelicula } from '../../components/Boton_pelicula';

const peliculas = [
  { src: wanda, alt: 'Wanda', name: 'Wanda', numero: 1 },
  { src: loki, alt: 'Loki', name: 'Loki', numero: 2 },
  { src: kate, alt: 'kate', name: 'Kate', numero: 3 },
  { src: america, alt: 'Capitan America', name: 'Cap America', numero: 4 },
  { src: aironman, alt: 'Ironman', name: 'Ironman', numero: 5 },
  { src: natasha, alt: 'Natasha', name: 'Natasha', numero: 6 },
  { src: spiderman, alt: 'Spiderman', name: 'Spiderman', numero: 7 },
  { src: yelena, alt: 'yelena', name: 'Yelena Belova', numero: 8 },
  { src: valkiria, alt: 'valkiria', name: 'Valkyrie', numero: 9 },
  { src: thanos, alt: 'Thanos', name: 'Thanos', numero: 10 },
  { src: thor, alt: 'Thor', name: 'Thor', numero: 11 },
  { src: hokai, alt: 'Hokai', name: 'Hokai', numero: 12 },
  { src: strange, alt: 'Strange', name: 'Strange', numero: 13 },
  { src: papper, alt: 'Papper', name: 'Papper', numero: 14 },
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
          <img src={src} alt={alt} className="h-32 sm:h-56 w-full mask" />
          <div className="flex flex-row justify-around">
            <p className="xl:text-3xl font-lonely-coffee">{name}</p>
            <p className="xl:text-3xl">{numero}</p>
          </div>
        </>
      ) : (
        <div
          className="bg-black h-full w-full flex items-center justify-center"
          style={{ transition: '.3s ease' }}
        >
          <h1 className="xl:text-8xl text-6xl font-sans text-white font-extrabold">X</h1>
        </div>
      )}
    </div>
  );
};


const getRandomNumber = () => {
  return Math.floor(Math.random() * peliculas.length) + 1; 
};

export const Avergers = () => {
  const [randomPelicula, setRandomPelicula] = useState(null);

  const getRandomPelicula = () => {
    const randomNumber = getRandomNumber();
    const resultado = peliculas.find(pelicula => pelicula.numero === randomNumber);
    setRandomPelicula(resultado);
  };

  useEffect(() => {
    getRandomPelicula();
  }, []);
  const reloadPage = () =>{
    window.location.reload();
  }
  return (
    <div className='bg-gradient-to-b from-amarillo to-naranja'>
      {randomPelicula && (
        <div className="flex flex-col xl:w-96 xl:mx-auto ">
          <img src={randomPelicula.src} alt={randomPelicula.alt} className='xl:h-56 h-64 mask'/>
          <p className='text-3xl flex justify-center font-lonely-coffee'>{randomPelicula.name}</p>
        </div>
      )}
      <div className="flex flex-row xl:gap-x-5 gap-24">
        <Boton_pelicula />
        <h1 className="xl:text-8xl text-4xl xl:mx-auto font-bold">Avengers</h1>
        <button onClick={reloadPage}>
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
