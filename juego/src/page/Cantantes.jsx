import React, { useState, useEffect } from 'react';
import billies from '../assets/Image/cantantes/billie.png';
import damiano from '../assets/Image/cantantes/damiano.png';
import camilo from '../assets/Image/cantantes/camilo.png';
import bieber from '../assets/Image/cantantes/justin_bieber.png';
import ariana from '../assets/Image/cantantes/ariana_grande.png';
import ed from '../assets/Image/cantantes/ed_sheeran.png';
import maluma from '../assets/Image/cantantes/maluma.png';
import ricky from '../assets/Image/cantantes/ricky_martin.png';
import tailor from '../assets/Image/cantantes/taylor_swift.png';
import sebastian from '../assets/Image/cantantes/sebastian_yatra.png';
import shakira from '../assets/Image/cantantes/shakira.png';
import silvestre from '../assets/Image/cantantes/silvestre.png';
import adele from '../assets/Image/cantantes/Adele.png';
import karol from '../assets/Image/cantantes/karol-g.png';
import sam from '../assets/Image/cantantes/sam.png';
import re_intentar from '../assets/Icons/re_cargar.png';
import { Boton } from '../components/Boton';

const cantantes = [
  { src: billies, alt: 'Billie', name: 'Billie', numero: 1 },
  { src: damiano, alt: 'Damiano', name: 'Damiano', numero: 2 },
  { src: camilo, alt: 'Camilo', name: 'Camilo', numero: 3 },
  { src: bieber, alt: 'Justin Bieber', name: 'Justin Bieber', numero: 4 },
  { src: ariana, alt: 'Ariana Grande', name: 'Ariana Grande', numero: 5 },
  { src: ed, alt: 'Ed Sheeran', name: 'Ed Sheeran', numero: 6 },
  { src: maluma, alt: 'Maluma', name: 'Maluma', numero: 7 },
  { src: ricky, alt: 'Ricky Martin', name: 'Ricky Martin', numero: 8 },
  { src: tailor, alt: 'Taylor Swift', name: 'Taylor Swift', numero: 9 },
  { src: sebastian, alt: 'Sebastian Yatra', name: 'Sebastian Yatra', numero: 10 },
  { src: shakira, alt: 'Shakira', name: 'Shakira', numero: 11 },
  { src: silvestre, alt: 'Silvestre', name: 'Silvestre', numero: 12 },
  { src: adele, alt: 'Adele', name: 'Adele', numero: 13 },
  { src: karol, alt: 'Karol G', name: 'Karol G', numero: 14 },
  { src: sam, alt: 'Sam', name: 'Sam', numero: 15 },
];

const ImageCard = ({ src, alt, name, numero }) => {
  const [showImage, setShowImage] = useState(true);

  const handleClick = () => {
    setShowImage(false);
  };

  return (
    <div
      className='estilo rounded-lg overflow-hidden transform skew-y-2 xl:text-2xl text-xs'
      onClick={handleClick}
    >
      {showImage ? (
        <>
          <img src={src} alt={alt} className='h-40 sm:h-56 w-full mask' />
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

export const Cantantes = () => {
  const [randomCantante, setRandomCantante] = useState(null);

  const getRandomCantante = () => {
    const randomNumber = getRandomNumber();
    const resultado = cantantes.find(cantante => cantante.numero === randomNumber);
    setRandomCantante(resultado);
  };

  useEffect(() => {
    getRandomCantante();
  }, []);

  return (
    <div className='bg-gradient-to-t from-naranja to-amarillo'>
      {randomCantante && (
        <div className="flex flex-col xl:w-96 xl:mx-auto">
          <img src={randomCantante.src} alt={randomCantante.alt} className='xl:h-56  h-64 mask'/>
          <p className='text-3xl flex justify-center font-lonely-coffee'>{randomCantante.name}</p>
        </div>
      )}
       <div className="flex flex-row xl:gap-x-5 gap-24">
        <Boton />
        <h1 className="xl:text-8xl text-2xl xl:mx-auto font-bold">Cantantes</h1>
        <button onClick={getRandomCantante}>
          <img src={re_intentar} alt="Reintentar" className="xl:w-20 w-14" />
        </button>
      </div>
      <main className='grid xl:grid-cols-5 grid-cols-3 xl:gap-4 gap-3 text-center mx-2'>
        {cantantes.map((cantante) => (
          <ImageCard key={cantante.numero} src={cantante.src} alt={cantante.alt} name={cantante.name} numero={cantante.numero} />
        ))}
      </main>
    </div>
  );
};
