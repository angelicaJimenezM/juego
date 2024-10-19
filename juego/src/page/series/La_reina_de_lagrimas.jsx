import React, { useState, useEffect } from 'react';
import bang_sil from '../../assets/Image/series/la_reia_de_lagrimas/bang_sil.jpg';
import beom_joon from '../../assets/Image/series/la_reia_de_lagrimas/beom_joon.png';
import da_hye from '../../assets/Image/series/la_reia_de_lagrimas/da_hye.png';
import eun_sung from '../../assets/Image/series/la_reia_de_lagrimas/eun_sung.png';
import hae_in from '../../assets/Image/series/la_reia_de_lagrimas/hae_in.png';
import ho_yeol from '../../assets/Image/series/la_reia_de_lagrimas/ho_yeol.jpg';
import hyun_jung from '../../assets/Image/series/la_reia_de_lagrimas/hyun_jung.jpg';
import hyun_woo from '../../assets/Image/series/la_reia_de_lagrimas/hyun_woo.jpg';
import secretary_na from '../../assets/Image/series/la_reia_de_lagrimas/secretary_na.jpg';
import beom_jun from '../../assets/Image/series/la_reia_de_lagrimas/beom_jun.jpg';
import seon_hwa from '../../assets/Image/series/la_reia_de_lagrimas/seon_hwa.png';
import seul_hee from '../../assets/Image/series/la_reia_de_lagrimas/seul_hee.png';
import soo_cheol from '../../assets/Image/series/la_reia_de_lagrimas/soo_cheol.png';
import vincenzo from '../../assets/Image/series/la_reia_de_lagrimas/vincenzo.jpg';
import yong_song from '../../assets/Image/series/la_reia_de_lagrimas/yong_song.jpg';
import re_intentar from '../../assets/Icons/re_cargar.png';
import { Boton_series } from '../../components/Boton_series';

const characters = [
  { src: bang_sil, alt: 'bang_sil', name: 'bang_sil', numero: 1 },
  { src: beom_joon, alt: 'beom_joon', name: 'beom_joon Wheeler', numero: 2 },
  { src: da_hye, alt: 'da_hye', name: 'da_hye Byers', numero: 3 },
  { src: eun_sung, alt: 'eun_sung', name: 'eun_sung Henderson', numero: 4 },
  { src: ho_yeol, alt: 'ho_yeol', name: 'ho_yeol Mayfield', numero: 5 },
  { src: hyun_jung, alt: 'hyun_jung', name: 'hyun_jung Byers', numero: 6 },
  { src: hyun_woo, alt: 'hyun_woo', name: 'Jim hyun_woo', numero: 7 },
  { src: secretary_na, alt: 'secretary_na', name: 'secretary_na Byers', numero: 8 },
  { src: beom_jun, alt: 'beom_jun', name: 'beom_jun Wheeler', numero: 9 },
  { src: seon_hwa, alt: 'seon_hwa', name: 'seon_hwa Harrington', numero: 10 },
  { src: seul_hee, alt: 'seul_hee', name: 'seul_hee Buckley', numero: 11 },
  { src: soo_cheol, alt: 'soo_cheol', name: 'soo_cheol Hargrove', numero: 12 },
  { src: vincenzo, alt: 'vincenzo', name: 'vincenzo Cunningham', numero: 13 },
  { src: yong_song, alt: 'yong_song', name: 'yong_song Wheeler', numero: 14 },
  { src: hae_in, alt: 'hae_in', name: 'papá', numero: 15 },
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

export const La_reina_de_lagrimas = () => {
  const [randomCharacter, setRandomCharacter] = useState(null);
  
  const getRandomCharacter = () => {
    const randomNumber = getRandomNumber();
    const resultado = characters.find(character => character.numero === randomNumber);
    setRandomCharacter(resultado);
  };
  
  useEffect(() => {
    getRandomCharacter();
  }, []);
  
  const reloadPage=()=>{
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
        <h1 className="xl:text-8xl text-4xl xl:mx-auto font-bold">La reina de las lagrimas</h1>
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
