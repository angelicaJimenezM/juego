import React, { useState, useEffect } from 'react';
import aoi from '../../assets/Image/anime/jujutsu_kaisen/aoi.jpg';
import geto from '../../assets/Image/anime/jujutsu_kaisen/geto.png';
import gojo from '../../assets/Image/anime/jujutsu_kaisen/gojo.png';
import inumaki from '../../assets/Image/anime/jujutsu_kaisen/inumaki.png';
import itadori from '../../assets/Image/anime/jujutsu_kaisen/itadori.png';
import kasumi from '../../assets/Image/anime/jujutsu_kaisen/kasumi.jpg';
import kento from '../../assets/Image/anime/jujutsu_kaisen/kento.jpg';
import maki from '../../assets/Image/anime/jujutsu_kaisen/maki.jpg';
import megumi from '../../assets/Image/anime/jujutsu_kaisen/megumi.png';
import mei_mei from '../../assets/Image/anime/jujutsu_kaisen/mei_mei.jpg';
import miguel from '../../assets/Image/anime/jujutsu_kaisen/miguel.jpg';
import muta from '../../assets/Image/anime/jujutsu_kaisen/muta.jpg';
import nobara from '../../assets/Image/anime/jujutsu_kaisen/nobara.jpg';
import riko from '../../assets/Image/anime/jujutsu_kaisen/riko.jpg';
import utahime from '../../assets/Image/anime/jujutsu_kaisen/utahime.jpg';
import re_intentar from '../../assets/Icons/re_cargar.png';
import { Boton } from '../../components/Boton';
import { Boton_anime } from '../../components/Boton_anime';

const characters = [
  { src: aoi, alt: 'aoi', name: 'aoi', numero: 1 },
  { src: geto, alt: 'Inosuke', name: 'Inosuke', numero: 2 },
  { src: gojo, alt: 'gojo', name: 'gojo', numero: 3 },
  { src: inumaki, alt: 'inumaki', name: 'inumaki', numero: 4 },
  { src: itadori, alt: 'itadori', name: 'itadori', numero: 5 },
  { src: kasumi, alt: 'kasumi', name: 'kasumi', numero: 6 },
  { src: kento, alt: 'kento', name: 'kento', numero: 7 },
  { src: maki, alt: 'maki', name: 'maki', numero: 8 },
  { src: megumi, alt: 'megumi', name: 'megumi', numero: 9 },
  { src: mei_mei, alt: 'mei_mei', name: 'mei_mei', numero: 10 },
  { src: miguel, alt: 'miguel', name: 'miguel', numero: 11 },
  { src: muta, alt: 'muta', name: 'muta', numero: 12 },
  { src: nobara, alt: 'nobara', name: 'nobara', numero: 13 },
  { src: riko, alt: 'riko', name: 'riko', numero: 14 },
  { src: utahime, alt: 'utahime', name: 'utahime', numero: 15 },
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

export const Jujutsu_kaisen = () => {
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
        <h1 className="xl:text-8xl text-4xl xl:mx-auto font-bold">Jujutsu kaisen</h1>
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
