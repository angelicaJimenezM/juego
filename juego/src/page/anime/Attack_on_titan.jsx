import React, { useState, useEffect } from 'react';
import annie from '../../assets/Image/anime/attack_on_titan/annie.jpg';
import armin from '../../assets/Image/anime/attack_on_titan/armin.jpg';
import eren from '../../assets/Image/anime/attack_on_titan/eren.jpg';
import erwin from '../../assets/Image/anime/attack_on_titan/erwin.jpg';
import hange from '../../assets/Image/anime/attack_on_titan/hange.png';
import hitch from '../../assets/Image/anime/attack_on_titan/hitch.jpg';
import jean from '../../assets/Image/anime/attack_on_titan/jean.jpg';
import levi from '../../assets/Image/anime/attack_on_titan/levi.jpg';
import mikasa from '../../assets/Image/anime/attack_on_titan/mikasa.jpg';
import pieck from '../../assets/Image/anime/attack_on_titan/pieck.jpg';
import reiner from '../../assets/Image/anime/attack_on_titan/reiner.jpg';
import sasha from '../../assets/Image/anime/attack_on_titan/sasha.jpg';
import yelena from '../../assets/Image/anime/attack_on_titan/yelena.jpg';
import ymir from '../../assets/Image/anime/attack_on_titan/ymir.jpg';
import zeke from '../../assets/Image/anime/attack_on_titan/zeke.jpg';
import re_intentar from '../../assets/Icons/re_cargar.png';
import { Boton } from '../../components/Boton';
import { Boton_anime} from '../../components/Boton_anime';

const characters = [
  { src: annie, alt: 'annie', name: 'annie', numero: 1 },
  { src: armin, alt: 'armin', name: 'armin', numero: 2 },
  { src: eren, alt: 'eren', name: 'eren', numero: 3 },
  { src: erwin, alt: 'erwin', name: 'erwin', numero: 4 },
  { src: hange, alt: 'hange', name: 'hange', numero: 5 },
  { src: hitch, alt: 'hitch', name: 'hitch', numero: 6 },
  { src: jean, alt: 'jean', name: 'jean', numero: 7 },
  { src: levi, alt: 'levi', name: 'levi', numero: 8 },
  { src: mikasa, alt: 'mikasa', name: 'mikasa', numero: 9 },
  { src: pieck, alt: 'pieck', name: 'pieck', numero: 10 },
  { src: reiner, alt: 'reiner', name: 'reiner', numero: 11 },
  { src: sasha, alt: 'sasha', name: 'sasha', numero: 12 },
  { src: yelena, alt: 'yelena', name: 'yelena', numero: 13 },
  { src: ymir, alt: 'ymir', name: 'ymir', numero: 14 },
  { src: zeke, alt: 'zeke', name: 'zeke', numero: 15 },
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

export const Attack_on_titan = () => {
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
        <h1 className="xl:text-8xl text-4xl xl:mx-auto font-bold">Attack on titan</h1>
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
