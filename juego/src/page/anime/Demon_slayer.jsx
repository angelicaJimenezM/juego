import React, { useState, useEffect } from 'react';
import nezuko from '../../assets/Image/anime/demon_slayer/nezuko.png';
import inosuke from '../../assets/Image/anime/demon_slayer/inosuke.png';
import gyomei from '../../assets/Image/anime/demon_slayer/Gyomei.png';
import kanao from '../../assets/Image/anime/demon_slayer/kanao.png';
import mitsuri from '../../assets/Image/anime/demon_slayer/Mitsuri.png';
import muzan from '../../assets/Image/anime/demon_slayer/muzan.png';
import obanai from '../../assets/Image/anime/demon_slayer/Obanai.png';
import rengoku from '../../assets/Image/anime/demon_slayer/rengoku.png';
import aoi from '../../assets/Image/anime/demon_slayer/aoi.jpg';
import tamayo from '../../assets/Image/anime/demon_slayer/tamayo.png';
import tanjiro from '../../assets/Image/anime/demon_slayer/tajiro.png';
import shinobu from '../../assets/Image/anime/demon_slayer/shinobu.png';
import tokito from '../../assets/Image/anime/demon_slayer/Tokito.png';
import uzui from '../../assets/Image/anime/demon_slayer/Uzui.png';
import zenitsu from '../../assets/Image/anime/demon_slayer/zenitsu.png';
import re_intentar from '../../assets/Icons/re_cargar.png';
import { Boton } from '../../components/Boton';
import { Boton_anime } from '../../components/Boton_anime';

const characters = [
  { src: nezuko, alt: 'Nezuko', name: 'Nezuko', numero: 1 },
  { src: inosuke, alt: 'Inosuke', name: 'Inosuke', numero: 2 },
  { src: gyomei, alt: 'Gyomei', name: 'Gyomei', numero: 3 },
  { src: kanao, alt: 'Kanao', name: 'Kanao', numero: 4 },
  { src: mitsuri, alt: 'Mitsuri', name: 'Mitsuri', numero: 5 },
  { src: muzan, alt: 'Muzan', name: 'Muzan', numero: 6 },
  { src: obanai, alt: 'Obanai', name: 'Obanai', numero: 7 },
  { src: rengoku, alt: 'Rengoku', name: 'Rengoku', numero: 8 },
  { src: aoi, alt: 'aoi', name: 'Aoi', numero: 9 },
  { src: tamayo, alt: 'Tamayo', name: 'Tamayo', numero: 10 },
  { src: tanjiro, alt: 'Tanjiro', name: 'Tanjiro', numero: 11 },
  { src: shinobu, alt: 'Shinobu', name: 'Shinobu', numero: 12 },
  { src: tokito, alt: 'Tokito', name: 'Tokito', numero: 13 },
  { src: uzui, alt: 'Uzui', name: 'Uzui', numero: 14 },
  { src: zenitsu, alt: 'Zenitsu', name: 'Zenitsu', numero: 15 },
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
          <img src={src} alt={alt} className="h-32 xl:h-56 w-full mask" />
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

export const Demon_slayer = () => {
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
          <img src={randomCharacter.src} alt={randomCharacter.alt} className='xl:h-56  h-56 mask'/>
          <p className='text-3xl flex justify-center font-lonely-coffee'>{randomCharacter.name}</p>
        </div>
      )}
      <div className="flex flex-row xl:gap-x-5 gap-24">
        <Boton_anime/>
        <h1 className="xl:text-8xl text-4xl xl:mx-auto font-bold">Demon slayer</h1>
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
