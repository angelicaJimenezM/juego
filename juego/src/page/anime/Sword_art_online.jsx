import React, { useState, useEffect } from 'react';
import akihiko from '../../assets/Image/anime/Sword_art_online/akihiko.jpg';
import alice from '../../assets/Image/anime/Sword_art_online/alice.jpg';
import asuna from '../../assets/Image/anime/Sword_art_online/asuna.jpg';
import ayano from '../../assets/Image/anime/Sword_art_online/ayano.jpg';
import dyne from '../../assets/Image/anime/Sword_art_online/dyne.jpg';
import eugeo from '../../assets/Image/anime/Sword_art_online/eugeo.jpg';
import kirito from '../../assets/Image/anime/Sword_art_online/kirito.jpg';
import leafa from '../../assets/Image/anime/Sword_art_online/leafa.jpg';
import quinella from '../../assets/Image/anime/Sword_art_online/quinella.jpg';
import rain from '../../assets/Image/anime/Sword_art_online/rain.jpg';
import ryoutarou from '../../assets/Image/anime/Sword_art_online/ryoutarou.jpg';
import sachi from '../../assets/Image/anime/Sword_art_online/sachi.jpg';
import shino from '../../assets/Image/anime/Sword_art_online/shino.jpg';
import shinozaki from '../../assets/Image/anime/Sword_art_online/shinozaki.jpg';
import yui from '../../assets/Image/anime/Sword_art_online/yui.jpg';
import re_intentar from '../../assets/Icons/re_cargar.png';
import { Boton } from '../../components/Boton';
import { Boton_anime } from '../../components/Boton_anime';

const characters = [
  { src: akihiko, alt: 'akihiko', name: 'akihiko', numero: 1 },
  { src: alice, alt: 'alice', name: 'alice', numero: 2 },
  { src: asuna, alt: 'asuna', name: 'asuna', numero: 3 },
  { src: ayano, alt: 'ayano', name: 'ayano', numero: 4 },
  { src: dyne, alt: 'dyne', name: 'dyne', numero: 5 },
  { src: eugeo, alt: 'eugeo', name: 'eugeo', numero: 6 },
  { src: kirito, alt: 'kirito', name: 'kirito', numero: 7 },
  { src: leafa, alt: 'leafa', name: 'leafa', numero: 8 },
  { src: quinella, alt: 'quinella', name: 'quinella', numero: 9 },
  { src: rain, alt: 'rain', name: 'rain', numero: 10 },
  { src: ryoutarou, alt: 'ryoutarou', name: 'ryoutarou', numero: 11 },
  { src: sachi, alt: 'sachi', name: 'sachi', numero: 12 },
  { src: shino, alt: 'shino', name: 'shino', numero: 13 },
  { src: shinozaki, alt: 'shinozaki', name: 'shinozaki', numero: 14 },
  { src: yui, alt: 'yui', name: 'yui', numero: 15 },
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
          <img src={src} alt={alt} className="h-32 xl:h-72 w-full mask" />
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

export const Sword_art_online = () => {
  const [randomCharacter, setRandomCharacter] = useState(null);

  const getRandomCharacter = () => {
    const randomNumber = getRandomNumber();
    const resultado = characters.find(character => character.numero === randomNumber);
    setRandomCharacter(resultado);
  
  };

  useEffect(() => {
    getRandomCharacter();
  }, []);
  const reloadPage = () => {
    window.location.reload(); 
  };
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
        <h1 className="xl:text-8xl text-4xl xl:mx-auto font-bold">Sword art online</h1>
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
