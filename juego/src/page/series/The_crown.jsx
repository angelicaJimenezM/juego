import React, { useState, useEffect } from 'react';
import queen_elizabeth from '../../assets/Image/series/the_crown/elizabeth_II.jpg';
import philip from '../../assets/Image/series/the_crown/philip.jpg';
import charles from '../../assets/Image/series/the_crown/charles.jpg';
import diana from '../../assets/Image/series/the_crown/diana.jpg';
import william from '../../assets/Image/series/the_crown/william.jpg';
import harry from '../../assets/Image/series/the_crown/harry.jpg';
import winston from '../../assets/Image/series/the_crown/winston.jpg';
import thatcher from '../../assets/Image/series/the_crown/thatcher.jpg';
import margaret from '../../assets/Image/series/the_crown/margaret.jpg';
import camilla from '../../assets/Image/series/the_crown/camilla.jpg';
import queen_mother from '../../assets/Image/series/the_crown/queen_mother.jpg';
import anne from '../../assets/Image/series/the_crown/anne.jpg';
import lord_mountbatten from '../../assets/Image/series/the_crown/lord_mountbatten.jpg';
import anthony from '../../assets/Image/series/the_crown/anthony.jpg';
import david from '../../assets/Image/series/the_crown/david.jpg';
import re_intentar from '../../assets/Icons/re_cargar.png';
import { Boton_series } from '../../components/Boton_series';

const characters = [
  { src: queen_elizabeth, alt: 'queen_elizabeth', name: 'Queen Elizabeth II', numero: 1 },
  { src: philip, alt: 'philip', name: 'Prince Philip', numero: 2 },
  { src: charles, alt: 'charles', name: 'Prince Charles', numero: 3 },
  { src: diana, alt: 'diana', name: 'Princess Diana', numero: 4 },
  { src: william, alt: 'william', name: 'Prince William', numero: 5 },
  { src: harry, alt: 'harry', name: 'Prince Harry', numero: 6 },
  { src: winston, alt: 'winston', name: 'Winston Churchill', numero: 7 },
  { src: thatcher, alt: 'thatcher', name: 'Margaret Thatcher', numero: 8 },
  { src: margaret, alt: 'margaret', name: 'Princess Margaret', numero: 9 },
  { src: camilla, alt: 'camilla', name: 'Camilla Parker Bowles', numero: 10 },
  { src: queen_mother, alt: 'queen_mother', name: 'Queen Mother', numero: 11 },
  { src: anne, alt: 'anne', name: 'Anne, Princess Royal', numero: 12 },
  { src: lord_mountbatten, alt: 'lord_mountbatten', name: 'Lord Mountbatten', numero: 13 },
  { src: anthony, alt: 'anthony', name: 'Anthony Eden', numero: 14 },
  { src: david, alt: 'david', name: 'David, Duke of Windsor', numero: 15 },
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

export const The_crown = () => {
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
        <h1 className="xl:text-8xl text-4xl xl:mx-auto font-bold">The crown</h1>
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
