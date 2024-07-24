import React, { useState, useEffect } from 'react';
import eloise from '../assets/Image/serie/eloise.png';
import antony from '../assets/Image/serie/antony.png';
import philipa from '../assets/Image/serie/philipa.png';
import prudence from '../assets/Image/serie/prudence.png';
import conde from '../assets/Image/serie/simon.png';
import daphne from '../assets/Image/serie/daphne.png';
import edwina from '../assets/Image/serie/edwina.png';
import francesca from '../assets/Image/serie/francesca.png';
import benedict from '../assets/Image/serie/benedict.png';
import colin from '../assets/Image/serie/colin.png';
import kate from '../assets/Image/serie/kate.png';
import lord from '../assets/Image/serie/lord.png';
import madre_b from '../assets/Image/serie/madre_b.png';
import penelope from '../assets/Image/serie/penelope.png';
import friederich from '../assets/Image/serie/principe.png';
import re_intentar from '../assets/Icons/re_cargar.png';
import { Boton } from '../components/Boton';

const series = [
  { src: eloise, alt: 'Eloise', name: 'Eloise', numero: 1 },
  { src: antony, alt: 'Anthony', name: 'Anthony', numero: 2 },
  { src: benedict, alt: 'Benedict', name: 'Benedict', numero: 3 },
  { src: colin, alt: 'Colin', name: 'Colin', numero: 4 },
  { src: philipa, alt: 'Philipa', name: 'Philipa', numero: 5 },
  { src: prudence, alt: 'Prudence', name: 'Prudence', numero: 6 },
  { src: daphne, alt: 'Daphne', name: 'Daphne', numero: 7 },
  { src: edwina, alt: 'Edwina', name: 'Edwina', numero: 8 },
  { src: francesca, alt: 'Francesca', name: 'Francesca', numero: 9 },
  { src: conde, alt: 'Simon', name: 'Simon', numero: 10 },
  { src: kate, alt: 'Kate', name: 'Kate', numero: 11 },
  { src: lord, alt: 'Debling', name: 'Debling', numero: 12 },
  { src: madre_b, alt: 'Violet', name: 'Violet', numero: 13 },
  { src: penelope, alt: 'Penelope', name: 'Penelope', numero: 14 },
  { src: friederich, alt: 'Friederich', name: 'Friederich', numero: 15 },
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
            <p className="xl:text-3xl">{numero}</p>
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
  return Math.floor(Math.random() * series.length) + 1; 
};

export const Serie = () => {
  const [randomSerie, setRandomSerie] = useState(null);

  const getRandomSerie = () => {
    const randomNumber = getRandomNumber();
    const resultado = series.find(serie => serie.numero === randomNumber);
    setRandomSerie(resultado);
  };

  useEffect(() => {
    getRandomSerie();
  }, []);

  return (
    <div className='bg-gradient-to-t from-naranja to-amarillo'>
      {randomSerie && (
        <div className="flex flex-col xl:w-96 xl:mx-auto">
          <img src={randomSerie.src} alt={randomSerie.alt} className='xl:h-96  h-80 mask'/>
          <p className='text-3xl flex justify-center font-lonely-coffee'>{randomSerie.name}</p>
        </div>
      )}
     <div className="flex flex-row xl:gap-x-5 gap-24">
        <Boton />
        <h1 className="xl:text-8xl text-5xl xl:mx-auto font-bold">Serie</h1>
        <button onClick={getRandomSerie}>
          <img src={re_intentar} alt="Reintentar" className="xl:w-20 w-14" />
        </button>
      </div>
      <main className="grid xl:grid-cols-5 grid-cols-3 xl:gap-4 gap-3 text-center mx-4">
        {series.map((serie) => (
          <ImageCard key={serie.numero} src={serie.src} alt={serie.alt} name={serie.name} numero={serie.numero} />
        ))}
      </main>
    </div>
  );
};
