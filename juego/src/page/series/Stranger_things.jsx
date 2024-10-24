import React, { useState, useEffect } from 'react';
import eleven from '../../assets/Image/series/stranger_things/eleven.jpg';
import mike from '../../assets/Image/series/stranger_things/mike.jpg';
import will from '../../assets/Image/series/stranger_things/will.jpg';
import dustin from '../../assets/Image/series/stranger_things/henderson.jpg';
import papa from '../../assets/Image/series/stranger_things/papa.jpg';
import max from '../../assets/Image/series/stranger_things/max.png';
import joyce from '../../assets/Image/series/stranger_things/joyce.jpg';
import hopper from '../../assets/Image/series/stranger_things/jim.jpg';
import jonathan from '../../assets/Image/series/stranger_things/jonathan.png';
import nancy from '../../assets/Image/series/stranger_things/nancy.jpg';
import steve from '../../assets/Image/series/stranger_things/steve.jpg';
import robin from '../../assets/Image/series/stranger_things/robin.jpg';
import billy from '../../assets/Image/series/stranger_things/billy.jpg';
import chrissy from '../../assets/Image/series/stranger_things/chrissy.jpg';
import karen from '../../assets/Image/series/stranger_things/karen.jpg';
import re_intentar from '../../assets/Icons/re_cargar.png';
import { Boton_series } from '../../components/Boton_series';

const characters = [
  { src: eleven, alt: 'eleven', name: 'Eleven', numero: 1 },
  { src: mike, alt: 'mike', name: 'Mike Wheeler', numero: 2 },
  { src: will, alt: 'will', name: 'Will Byers', numero: 3 },
  { src: dustin, alt: 'dustin', name: 'Dustin Henderson', numero: 4 },
  { src: max, alt: 'max', name: 'Max Mayfield', numero: 5 },
  { src: joyce, alt: 'joyce', name: 'joyce Byers', numero: 6 },
  { src: hopper, alt: 'hopper', name: 'Jim Hopper', numero: 7 },
  { src: jonathan, alt: 'jonathan', name: 'Jonathan Byers', numero: 8 },
  { src: nancy, alt: 'nancy', name: 'Nancy Wheeler', numero: 9 },
  { src: steve, alt: 'steve', name: 'Steve Harrington', numero: 10 },
  { src: robin, alt: 'robin', name: 'Robin Buckley', numero: 11 },
  { src: billy, alt: 'billy', name: 'Billy Hargrove', numero: 12 },
  { src: chrissy, alt: 'chrissy', name: 'Chrissy Cunningham', numero: 13 },
  { src: karen, alt: 'karen', name: 'Karen Wheeler', numero: 14 },
  { src: papa, alt: 'papa', name: 'papá', numero: 15 },
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
  return Math.floor(Math.random() * 14) + 1; 
};

export const Stranger_things = () => {
  const [randomCharacter, setRandomCharacter] = useState(null);

  const getRandomCharacter = () => {
    const randomNumber = getRandomNumber();
    const resultado = characters.find(character => character.numero === randomNumber);
    setRandomCharacter(resultado);
  };

  useEffect(() => {
    getRandomCharacter();
  }, []);
  const reloadPage =() =>{
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
        <h1 className="xl:text-8xl text-4xl xl:mx-auto font-bold">Stranger Things</h1>
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
