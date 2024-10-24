import React, { useState, useEffect } from 'react';
import caesar from '../../assets/Image/peliculas/los_juegos_del_hambre/caesar.jpg';
import coin from '../../assets/Image/peliculas/los_juegos_del_hambre/coin.jpg';
import effie from '../../assets/Image/peliculas/los_juegos_del_hambre/effie.jpg';
import finnick from '../../assets/Image/peliculas/los_juegos_del_hambre/finnick.jpg';
import gale from '../../assets/Image/peliculas/los_juegos_del_hambre/gale.jpg';
import haymitch from '../../assets/Image/peliculas/los_juegos_del_hambre/haymitch.jpg';
import johana from '../../assets/Image/peliculas/los_juegos_del_hambre/johanna.jpg';
import katniss from '../../assets/Image/peliculas/los_juegos_del_hambre/katniss.jpg';
import peeta from '../../assets/Image/peliculas/los_juegos_del_hambre/peeta.jpg';
import pollux from '../../assets/Image/peliculas/los_juegos_del_hambre/pollux.jpg';
import prim from '../../assets/Image/peliculas/los_juegos_del_hambre/prim.jpg';
import rue from '../../assets/Image/peliculas/los_juegos_del_hambre/rue.jpg';
import seneca from '../../assets/Image/peliculas/los_juegos_del_hambre/seneca.jpg';
import snow from '../../assets/Image/peliculas/los_juegos_del_hambre/snow.jpg';
import tigris from '../../assets/Image/peliculas/los_juegos_del_hambre/tigris.jpg';
import re_intentar from '../../assets/Icons/re_cargar.png';
import { Boton_pelicula } from '../../components/Boton_pelicula';

const characters = [
  { src: caesar, alt: 'caesar', name: 'caesar', numero: 1 },
  { src: coin, alt: 'coin', name: 'coin', numero: 2 },
  { src: effie, alt: 'effie', name: 'effie', numero: 3 },
  { src: finnick, alt: 'finnick', name: 'finnick', numero: 4 },
  { src: gale, alt: 'gale', name: 'gale', numero: 5 },
  { src: haymitch, alt: 'haymitch', name: 'haymitch', numero: 6 },
  { src: johana, alt: 'johana', name: 'johana', numero: 7 },
  { src: katniss, alt: 'katniss', name: 'katniss', numero: 8 },
  { src: peeta, alt: 'peeta', name: 'peeta', numero: 9 },
  { src: pollux, alt: 'pollux', name: 'pollux', numero: 10 },
  { src: prim, alt: 'prim', name: 'prim', numero: 11 },
  { src: rue, alt: 'rue', name: 'rue', numero: 12 },
  { src: seneca, alt: 'seneca', name: 'seneca', numero: 13 },
  { src: snow, alt: 'snow', name: 'snow', numero: 14 },
  { src: tigris, alt: 'tigris', name: 'tigris', numero: 15 },
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

export const Juegos_del_hambre = () => {
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
        <Boton_pelicula/>
        <h1 className="xl:text-8xl text-4xl xl:mx-auto font-bold">Los juegos del hambre</h1>
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
