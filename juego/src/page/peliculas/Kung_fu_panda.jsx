import React, { useState, useEffect } from 'react';
import po from '../../assets/Image/peliculas/khun_fu/po.jpg';
import shifu from '../../assets/Image/peliculas/khun_fu/shifu.jpg';
import tigress from '../../assets/Image/peliculas/khun_fu/tigress.jpg';
import monkey from '../../assets/Image/peliculas/khun_fu/monkey.jpg';
import mantis from '../../assets/Image/peliculas/khun_fu/mantis.jpg';
import viper from '../../assets/Image/peliculas/khun_fu/viper.jpg';
import crane from '../../assets/Image/peliculas/khun_fu/crane.jpg';
import lord_Shen from '../../assets/Image/peliculas/khun_fu/lord_Shen.jpg';
import tai_lung from '../../assets/Image/peliculas/khun_fu/tai_lung.jpg';
import master_storming_ox from '../../assets/Image/peliculas/khun_fu/master_storming_ox.jpg';
import mr_ping from '../../assets/Image/peliculas/khun_fu/mr_ping.jpg';
import li_shan from '../../assets/Image/peliculas/khun_fu/li_shan.jpg';
import kai from '../../assets/Image/peliculas/khun_fu/kai.jpg';
import mei_mei from '../../assets/Image/peliculas/khun_fu/mei_mei.jpg';
import master_croc from '../../assets/Image/peliculas/khun_fu/master_croc.jpg';
import re_intentar from '../../assets/Icons/re_cargar.png';
import { Boton_pelicula } from '../../components/Boton_pelicula';

const characters = [
  { src: po, alt: 'Po', name: 'Po', numero: 1 },
  { src: shifu, alt: 'Shifu', name: 'Shifu', numero: 2 },
  { src: tigress, alt: 'Tigress', name: 'Tigress', numero: 3 },
  { src: monkey, alt: 'Monkey', name: 'Monkey', numero: 4 },
  { src: mantis, alt: 'Mantis', name: 'Mantis', numero: 5 },
  { src: viper, alt: 'Viper', name: 'Viper', numero: 6 },
  { src: crane, alt: 'Crane', name: 'Crane', numero: 7 },
  { src: lord_Shen, alt: 'lord_Shen', name: 'lord_Shen', numero: 8 },
  { src: tai_lung, alt: 'Tai Lung', name: 'Tai Lung', numero: 9 },
  { src: master_storming_ox, alt: 'master_storming_ox', name: 'master_storming_ox', numero: 10 },
  { src: mr_ping, alt: 'Mr. Ping', name: 'Mr. Ping', numero: 11 },
  { src: li_shan, alt: 'Li Shan', name: 'Li Shan', numero: 12 },
  { src: kai, alt: 'Kai', name: 'Kai', numero: 13 },
  { src: mei_mei, alt: 'Mei Mei', name: 'Mei Mei', numero: 14 },
  { src: master_croc, alt: 'Master Croc', name: 'Master Croc', numero: 15 },
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

export const Kung_fu_panda = () => {
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
        <h1 className="xl:text-8xl text-4xl xl:mx-auto font-bold">Kung fu panda</h1>
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
