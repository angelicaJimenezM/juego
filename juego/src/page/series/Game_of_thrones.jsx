import React, { useState, useEffect } from 'react';
import jon_snow from '../../assets/Image/series/game_of_thrones/jon_snow.jpg';
import tyrion_lannister from '../../assets/Image/series/game_of_thrones/tyrion_lannister.jpg';
import jaime_lannister from '../../assets/Image/series/game_of_thrones/jaime_lannister.jpg';
import ned_stark from '../../assets/Image/series/game_of_thrones/ned_stark.jpg';
import khal_drogo from '../../assets/Image/series/game_of_thrones/khal_drogo.jpg';
import petyr_baelish from '../../assets/Image/series/game_of_thrones/baelish.jpg';
import varys from '../../assets/Image/series/game_of_thrones/varys.jpg';
import jorah_mormont from '../../assets/Image/series/game_of_thrones/jorah.jpg';
import daenerys_targaryen from '../../assets/Image/series/game_of_thrones/daenerys.jpg';
import cersei_lannister from '../../assets/Image/series/game_of_thrones/cersei.jpg';
import arya_stark from '../../assets/Image/series/game_of_thrones/arya.jpg';
import sansa_stark from '../../assets/Image/series/game_of_thrones/sansa.jpg';
import brienne_of_tarth from '../../assets/Image/series/game_of_thrones/brienne.jpg';
import melisandre from '../../assets/Image/series/game_of_thrones/melisandre.jpg';
import margaery_tyrell from '../../assets/Image/series/game_of_thrones/margaery.jpg';
import re_intentar from '../../assets/Icons/re_cargar.png';
import { Boton_series } from '../../components/Boton_series';

const characters = [
  { src: jon_snow, alt: 'Jon Snow', name: 'Jon Snow', numero: 1 },
  { src: tyrion_lannister, alt: 'Tyrion Lannister', name: 'Tyrion Lannister', numero: 2 },
  { src: jaime_lannister, alt: 'Jaime Lannister', name: 'Jaime Lannister', numero: 3 },
  { src: ned_stark, alt: 'Ned Stark', name: 'Ned Stark', numero: 4 },
  { src: khal_drogo, alt: 'Khal Drogo', name: 'Khal Drogo', numero: 5 },
  { src: petyr_baelish, alt: 'Petyr Baelish', name: 'Petyr Baelish', numero: 6 },
  { src: varys, alt: 'Varys', name: 'Varys', numero: 7 },
  { src: jorah_mormont, alt: 'Jorah Mormont', name: 'Jorah Mormont', numero: 8 },
  { src: daenerys_targaryen, alt: 'Daenerys Targaryen', name: 'Daenerys Targaryen', numero: 9 },
  { src: cersei_lannister, alt: 'Cersei Lannister', name: 'Cersei Lannister', numero: 10 },
  { src: arya_stark, alt: 'Arya Stark', name: 'Arya Stark', numero: 11 },
  { src: sansa_stark, alt: 'Sansa Stark', name: 'Sansa Stark', numero: 12 },
  { src: brienne_of_tarth, alt: 'Brienne of Tarth', name: 'Brienne of Tarth', numero: 13 },
  { src: melisandre, alt: 'Melisandre', name: 'Melisandre', numero: 14 },
  { src: margaery_tyrell, alt: 'Margaery Tyrell', name: 'Margaery Tyrell', numero: 15 },
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

export const Game_of_thrones = () => {
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
          <img src={randomCharacter.src} alt={randomCharacter.alt} className='xl:h-64 h-56 mask'/>
          <p className='text-3xl flex justify-center font-lonely-coffee'>{randomCharacter.name}</p>
        </div>
      )}
      <div className="flex flex-row xl:gap-x-5 gap-24">
        <Boton_series/>
        <h1 className="xl:text-8xl text-4xl xl:mx-auto font-bold">Game of Thrones</h1>
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
