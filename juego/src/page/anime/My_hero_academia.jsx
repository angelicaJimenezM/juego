import React, { useState, useEffect } from 'react';
import aizawa from '../../assets/Image/anime/my_hereo_academia/aizawa.jpg';
import aoyama from '../../assets/Image/anime/my_hereo_academia/aoyama.jpg';
import asui from '../../assets/Image/anime/my_hereo_academia/asui.jpg';
import bakugo from '../../assets/Image/anime/my_hereo_academia/bakugo.jpg';
import deku from '../../assets/Image/anime/my_hereo_academia/deku.jpg';
import hatsume from '../../assets/Image/anime/my_hereo_academia/hatsume.jpg';
import kirishima from '../../assets/Image/anime/my_hereo_academia/kirishima.jpg';
import momo from '../../assets/Image/anime/my_hereo_academia/momo.jpg';
import todoroki from '../../assets/Image/anime/my_hereo_academia/todoroki.jpg';
import shisou from '../../assets/Image/anime/my_hereo_academia/shisou.jpg';
import tenya from '../../assets/Image/anime/my_hereo_academia/tenya.jpg';
import tetsutetsu from '../../assets/Image/anime/my_hereo_academia/tetsutetsu.jpg';
import toga from '../../assets/Image/anime/my_hereo_academia/toga.jpg';
import uraraka from '../../assets/Image/anime/my_hereo_academia/uraraka.jpg';
import deki from '../../assets/Image/anime/my_hereo_academia/deki.jpg';
import re_intentar from '../../assets/Icons/re_cargar.png';
import { Boton } from '../../components/Boton';
import { Boton_anime } from '../../components/Boton_anime';

const characters = [
  { src: aizawa, alt: 'aizawa', name: 'aizawa', numero: 1 },
  { src: aoyama, alt: 'aoyama', name: 'aoyama', numero: 2 },
  { src: asui, alt: 'asui', name: 'asui', numero: 3 },
  { src: bakugo, alt: 'bakugo', name: 'bakugo', numero: 4 },
  { src: deku, alt: 'deku', name: 'deku', numero: 5 },
  { src: hatsume, alt: 'hatsume', name: 'hatsume', numero: 6 },
  { src: kirishima, alt: 'kirishima', name: 'kirishima', numero: 7 },
  { src: momo, alt: 'momo', name: 'momo', numero: 8 },
  { src: todoroki, alt: 'todoroki', name: 'todoroki', numero: 9 },
  { src: shisou, alt: 'shisou', name: 'shisou', numero: 10 },
  { src: tenya, alt: 'tenya', name: 'tenya', numero: 11 },
  { src: tetsutetsu, alt: 'tetsutetsu', name: 'tetsutetsu', numero: 12 },
  { src: toga, alt: 'toga', name: 'toga', numero: 13 },
  { src: uraraka, alt: 'uraraka', name: 'uraraka', numero: 14 },
  { src: deki, alt: 'deki', name: 'deki', numero: 15 },
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

export const My_hereo_academia = () => {
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
        <h1 className="xl:text-8xl text-4xl xl:mx-auto font-bold">My hero academia</h1>
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
