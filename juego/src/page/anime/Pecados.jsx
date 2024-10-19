import React, { useState, useEffect } from 'react';
import ban from '../../assets/Image/anime/7_pecados/ban.jpg';
import derieri from '../../assets/Image/anime/7_pecados/derieri.jpg';
import diane from '../../assets/Image/anime/7_pecados/diane.jpg';
import elaine from '../../assets/Image/anime/7_pecados/elaine.jpg';
import elizabeth from '../../assets/Image/anime/7_pecados/elizabeth.jpg';
import escanor from '../../assets/Image/anime/7_pecados/escanor.jpg';
import estarossa from '../../assets/Image/anime/7_pecados/estarossa.jpg';
import gelda from '../../assets/Image/anime/7_pecados/gelda.jpg';
import gowther from '../../assets/Image/anime/7_pecados/gowther.jpg';
import hendrickson from '../../assets/Image/anime/7_pecados/hendrickson.jpg';
import meliodas from '../../assets/Image/anime/7_pecados/meliodas.jpg';
import merlin from '../../assets/Image/anime/7_pecados/merlin.jpg';
import vivian from '../../assets/Image/anime/7_pecados/vivian.jpg';
import margaret from '../../assets/Image/anime/7_pecados/margaret.jpg';
import zeldris from '../../assets/Image/anime/7_pecados/zeldris.jpg';
import re_intentar from '../../assets/Icons/re_cargar.png';
import { Boton } from '../../components/Boton';
import { Boton_anime } from '../../components/Boton_anime';

const characters = [
  { src: ban, alt: 'ban', name: 'ban', numero: 1 },
  { src: derieri, alt: 'derieri', name: 'derieri', numero: 2 },
  { src: diane, alt: 'diane', name: 'diane', numero: 3 },
  { src: elaine, alt: 'elaine', name: 'elaine', numero: 4 },
  { src: elizabeth, alt: 'elizabeth', name: 'elizabeth', numero: 5 },
  { src: escanor, alt: 'escanor', name: 'escanor', numero: 6 },
  { src: estarossa, alt: 'estarossa', name: 'estarossa', numero: 7 },
  { src: gelda, alt: 'gelda', name: 'gelda', numero: 8 },
  { src: gowther, alt: 'gowther', name: 'gowther', numero: 9 },
  { src: hendrickson, alt: 'hendrickson', name: 'hendrickson', numero: 10 },
  { src: meliodas, alt: 'meliodas', name: 'meliodas', numero: 11 },
  { src: merlin, alt: 'merlin', name: 'merlin', numero: 12 },
  { src: vivian, alt: 'vivian', name: 'vivian', numero: 13 },
  { src: margaret, alt: 'margaret', name: 'margaret', numero: 14 },
  { src: zeldris, alt: 'zeldris', name: 'zeldris', numero: 15 },
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
          <img src={src} alt={alt} className="h-32 xl:h-64 w-full mask" />
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

export const Pecados = () => {
  const [randomCharacter, setRandomCharacter] = useState(null);

  const getRandomCharacter = () => {
    const randomNumber = getRandomNumber();
    const resultado = characters.find(character => character.numero === randomNumber);
    setRandomCharacter(resultado);
  };

  useEffect(() => {
    getRandomCharacter();
  }, []);
  const reloadPage = () =>{
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
        <Boton_anime/>
        <h1 className="xl:text-8xl text-4xl xl:mx-auto font-bold">Los 7 pecados capitales</h1>
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
