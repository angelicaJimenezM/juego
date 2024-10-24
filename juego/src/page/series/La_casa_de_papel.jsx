import React, { useState, useEffect } from 'react';
import alicia from '../../assets/Image/series/la_casa_de_papel/alicia.jpg';
import angel from '../../assets/Image/series/la_casa_de_papel/angel.jpg';
import arturo from '../../assets/Image/series/la_casa_de_papel/arturo.jpg';
import berlín from '../../assets/Image/series/la_casa_de_papel/berlín.jpg';
import colombia from '../../assets/Image/series/la_casa_de_papel/colombia.jpg';
import denver from '../../assets/Image/series/la_casa_de_papel/denver.jpg';
import el_profesor from '../../assets/Image/series/la_casa_de_papel/el_profesor.jpg';
import helsinki from '../../assets/Image/series/la_casa_de_papel/helsinki.jpg';
import monica from '../../assets/Image/series/la_casa_de_papel/monica.jpg';
import moscú from '../../assets/Image/series/la_casa_de_papel/moscú.jpg';
import nairobi from '../../assets/Image/series/la_casa_de_papel/nairobi.jpg';
import oslo from '../../assets/Image/series/la_casa_de_papel/oslo.jpg';
import raquel from '../../assets/Image/series/la_casa_de_papel/raquel.jpg';
import rio from '../../assets/Image/series/la_casa_de_papel/rio.jpg';
import tokio from '../../assets/Image/series/la_casa_de_papel/tokio.jpg';
import re_intentar from '../../assets/Icons/re_cargar.png';
import { Boton_series } from '../../components/Boton_series';

const characters = [
  { src: alicia, alt: 'alicia', name: 'alicia', numero: 1 },
  { src: angel, alt: 'angel', name: 'angel', numero: 2 },
  { src: arturo, alt: 'arturo', name: 'arturo', numero: 3 },
  { src: berlín, alt: 'berlín', name: 'berlín', numero: 4 },
  { src: colombia, alt: 'colombia', name: 'colombia', numero: 5 },
  { src: denver, alt: 'denver', name: 'denver', numero: 6 },
  { src: el_profesor, alt: 'el_profesor', name: 'el_profesor', numero: 7 },
  { src: helsinki, alt: 'helsinki', name: 'helsinki', numero: 8 },
  { src: monica, alt: 'monica', name: 'monica', numero: 9 },
  { src: moscú, alt: 'moscú', name: 'moscú', numero: 10 },
  { src: nairobi, alt: 'nairobi', name: 'nairobi', numero: 11 },
  { src: oslo, alt: 'oslo', name: 'oslo', numero: 12 },
  { src: raquel, alt: 'raquel', name: 'raquel', numero: 13 },
  { src: rio, alt: 'rio', name: 'rio', numero: 14 },
  { src: tokio, alt: 'tokio', name: 'tokio', numero: 15 },
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
          <img src={src} alt={alt} className="h-32 xl:h-60 w-full mask" />
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
  return Math.floor(Math.random() * 15) + 1; 
};

export const La_casa_de_papel = () => {
  const [randomCharacter, setRandomCharacter] = useState(null);

  const getRandomCharacter = () => {
    const randomNumber = getRandomNumber();
    const resultado = characters.find(character => character.numero === randomNumber);
    setRandomCharacter(resultado);
  };

  useEffect(() => {
    getRandomCharacter();
  }, []);
  const reloadPage =()=>{
    window.location.reload();
  }
  return (
    <div className='bg-gradient-to-t from-naranja to-amarillo'>
      {randomCharacter && (
        <div className="flex flex-col xl:w-96 xl:mx-auto ">
          <img src={randomCharacter.src} alt={randomCharacter.alt} className='xl:h-64  h-56 mask'/>
          <p className='text-3xl flex justify-center font-lonely-coffee'>{randomCharacter.name}</p>
        </div>
      )}
      <div className="flex flex-row xl:gap-x-5 gap-24">
        <Boton_series/>
        <h1 className="xl:text-8xl text-4xl xl:mx-auto font-bold">La casa de papel</h1>
        <button onClick={reloadPage}>
          <img src={re_intentar} alt="Reintentar" className="xl:w-20 w-14" />
        </button>
      </div>
      <main className="grid xl:grid-cols-5 grid-cols-3 xl:gap-4 gap-3 text-center mx-4">
        {characters.map((character) => (
          <ImageCard key={character.numero} src={character.src} alt={character.alt} name={character.name} numero={character.numero} />
        ))}
      </main>
    </div>
  );
};
