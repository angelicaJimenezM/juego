import React, { useState, useEffect } from 'react';
import bailey from '../../assets/Image/peliculas/son_como_niños/bailey.jpg';
import becky from '../../assets/Image/peliculas/son_como_niños/becky.jpg';
import charlotte from '../../assets/Image/peliculas/son_como_niños/charlotte.jpg';
import deanne from '../../assets/Image/peliculas/son_como_niños/deanne.jpg';
import greg from '../../assets/Image/peliculas/son_como_niños/greg.jpg';
import jackie from '../../assets/Image/peliculas/son_como_niños/jackie.jpg';
import keithie from '../../assets/Image/peliculas/son_como_niños/keithie.jpg';
import kurt from '../../assets/Image/peliculas/son_como_niños/kurt.jpg';
import lamonsoff from '../../assets/Image/peliculas/son_como_niños/lamonsoff.jpg';
import lenny from '../../assets/Image/peliculas/son_como_niños/lenny.jpg';
import marcus from '../../assets/Image/peliculas/son_como_niños/marcus.jpg';
import rob from '../../assets/Image/peliculas/son_como_niños/rob.jpg';
import ronzoni from '../../assets/Image/peliculas/son_como_niños/ronzoni.jpg';
import roxanne from '../../assets/Image/peliculas/son_como_niños/roxanne.jpg';
import sally from '../../assets/Image/peliculas/son_como_niños/sally.jpg';
import re_intentar from '../../assets/Icons/re_cargar.png';
import { Boton_pelicula } from '../../components/Boton_pelicula';

const characters = [
  { src: bailey, alt: 'bailey', name: 'bailey', numero: 1 },
  { src: becky, alt: 'becky', name: 'becky', numero: 2 },
  { src: charlotte, alt: 'charlotte', name: 'charlotte', numero: 3 },
  { src: deanne, alt: 'deanne', name: 'deanne', numero: 4 },
  { src: greg, alt: 'greg', name: 'greg', numero: 5 },
  { src: jackie, alt: 'jackie', name: 'jackie', numero: 6 },
  { src: keithie, alt: 'keithie', name: 'keithie', numero: 7 },
  { src: kurt, alt: 'kurt', name: 'kurt', numero: 8 },
  { src: lamonsoff, alt: 'lamonsoff', name: 'lamonsoff', numero: 9 },
  { src: lenny, alt: 'lenny', name: 'lenny', numero: 10 },
  { src: marcus, alt: 'marcus', name: 'marcus', numero: 11 },
  { src: rob, alt: 'rob', name: 'rob', numero: 12 },
  { src: ronzoni, alt: 'ronzoni', name: 'ronzoni', numero: 13 },
  { src: roxanne, alt: 'roxanne', name: 'roxanne', numero: 14 },
  { src: sally, alt: 'sally', name: 'sally', numero: 15 },
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

export const Son_como_niños = () => {
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
        <h1 className="xl:text-8xl text-4xl xl:mx-auto font-bold">Son como niños</h1>
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
