import React, { useState, useEffect } from 'react';
import charlie from '../../assets/Image/peliculas/a_ciegas/charlie.jpg';
import cheryl from '../../assets/Image/peliculas/a_ciegas/cheryl.jpg';
import claire from '../../assets/Image/peliculas/a_ciegas/claire.jpg';
import douglas from '../../assets/Image/peliculas/a_ciegas/douglas.jpg';
import felicity from '../../assets/Image/peliculas/a_ciegas/felicity.jpg';
import felix from '../../assets/Image/peliculas/a_ciegas/felix.jpg';
import gary from '../../assets/Image/peliculas/a_ciegas/gary.jpg';
import Jason from '../../assets/Image/peliculas/a_ciegas/Jason.jpg';
import Jessica from '../../assets/Image/peliculas/a_ciegas/Jessica.jpg';
import lucy from '../../assets/Image/peliculas/a_ciegas/lucy.jpg';
import lydia from '../../assets/Image/peliculas/a_ciegas/lydia.jpg';
import samantha from '../../assets/Image/peliculas/a_ciegas/samantha.jpg';
import malorie from '../../assets/Image/peliculas/a_ciegas/malorie.jpg';
import olympia from '../../assets/Image/peliculas/a_ciegas/olympia.jpg';
import tom from '../../assets/Image/peliculas/a_ciegas/tom.jpg';
import re_intentar from '../../assets/Icons/re_cargar.png';
import { Boton_pelicula } from '../../components/Boton_pelicula';

const peliculas = [
  { src: charlie, alt: 'charlie', name: 'charlie', numero: 1 },
  { src: cheryl, alt: 'cheryl', name: 'cheryl', numero: 2 },
  { src: claire, alt: 'claire', name: 'claire', numero: 3 },
  { src: douglas, alt: 'Capitan douglas', name: 'Cap douglas', numero: 4 },
  { src: felicity, alt: 'Ironman', name: 'Ironman', numero: 5 },
  { src: felix, alt: 'Natasha', name: 'Natasha', numero: 6 },
  { src: gary, alt: 'gary', name: 'gary', numero: 7 },
  { src: Jason, alt: 'Jason', name: 'Jason Belova', numero: 8 },
  { src: Jessica, alt: 'Jessica', name: 'Valkyrie', numero: 9 },
  { src: lucy, alt: 'lucy', name: 'lucy', numero: 10 },
  { src: lydia, alt: 'lydia', name: 'lydia', numero: 11 },
  { src: samantha, alt: 'samantha', name: 'samantha', numero: 12 },
  { src: malorie, alt: 'malorie', name: 'malorie', numero: 13 },
  { src: olympia, alt: 'olympia', name: 'olympia', numero: 14 },
  { src: tom, alt: 'tom', name: 'tom', numero: 15 },
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
          <img src={src} alt={alt} className="h-32 sm:h-56 w-full mask" />
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
  return Math.floor(Math.random() * peliculas.length) + 1; 
};

export const A_ciegas = () => {
  const [randomPelicula, setRandomPelicula] = useState(null);

  const getRandomPelicula = () => {
    const randomNumber = getRandomNumber();
    const resultado = peliculas.find(pelicula => pelicula.numero === randomNumber);
    setRandomPelicula(resultado);
  };

  useEffect(() => {
    getRandomPelicula();
  }, []);
  const reloadPage = () =>{
    window.location.reload();
  }
  return (
    <div className='bg-gradient-to-b from-amarillo to-naranja'>
      {randomPelicula && (
        <div className="flex flex-col xl:w-96 xl:mx-auto ">
          <img src={randomPelicula.src} alt={randomPelicula.alt} className='xl:h-56 h-64 mask'/>
          <p className='text-3xl flex justify-center font-lonely-coffee'>{randomPelicula.name}</p>
        </div>
      )}
      <div className="flex flex-row xl:gap-x-5 gap-24">
        <Boton_pelicula />
        <h1 className="xl:text-8xl text-4xl xl:mx-auto font-bold">A ciegas</h1>
        <button onClick={reloadPage}>
          <img src={re_intentar} alt="Reintentar" className="xl:w-20 w-14" />
        </button>
      </div>
      <main className="grid xl:grid-cols-5 grid-cols-3 xl:gap-4 gap-3 text-center mx-4">
        {peliculas.map((pelicula) => (
          <ImageCard key={pelicula.numero} src={pelicula.src} alt={pelicula.alt} name={pelicula.name} numero={pelicula.numero} />
        ))}
      </main>
    </div>
  );
};
