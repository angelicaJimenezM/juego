import React, { useState, useEffect } from 'react';
import draco from '../../assets/Image/peliculas/harry_potter/draco.jpg';
import dumbledore from '../../assets/Image/peliculas/harry_potter/dumbledore.jpg';
import fred from '../../assets/Image/peliculas/harry_potter/fred.jpg';
import george from '../../assets/Image/peliculas/harry_potter/george.jpg';
import ginny from '../../assets/Image/peliculas/harry_potter/ginny.jpg';
import hagrid from '../../assets/Image/peliculas/harry_potter/hagrid.jpg';
import harry from '../../assets/Image/peliculas/harry_potter/harry.jpg';
import hermione from '../../assets/Image/peliculas/harry_potter/hermione.jpg';
import luna from '../../assets/Image/peliculas/harry_potter/luna.jpg';
import minerva from '../../assets/Image/peliculas/harry_potter/minerva.jpg';
import ron from '../../assets/Image/peliculas/harry_potter/ron.jpg';
import severus from '../../assets/Image/peliculas/harry_potter/severus.jpg';
import sirius from '../../assets/Image/peliculas/harry_potter/sirius.jpg';
import neville from '../../assets/Image/peliculas/harry_potter/neville.jpg';
import voldemort from '../../assets/Image/peliculas/harry_potter/voldemort.jpg';
import re_intentar from '../../assets/Icons/re_cargar.png';
import { Boton_pelicula } from '../../components/Boton_pelicula';

const peliculas = [
  { src: draco, alt: 'draco', name: 'draco', numero: 1 },
  { src: dumbledore, alt: 'dumbledore', name: 'dumbledore', numero: 2 },
  { src: fred, alt: 'fred', name: 'fred', numero: 3 },
  { src: george, alt: 'Capitan george', name: 'Cap george', numero: 4 },
  { src: ginny, alt: 'Ironman', name: 'Ironman', numero: 5 },
  { src: hagrid, alt: 'Natasha', name: 'Natasha', numero: 6 },
  { src: harry, alt: 'harry', name: 'harry', numero: 7 },
  { src: hermione, alt: 'hermione', name: 'hermione Belova', numero: 8 },
  { src: luna, alt: 'luna', name: 'Valkyrie', numero: 9 },
  { src: minerva, alt: 'minerva', name: 'minerva', numero: 10 },
  { src: ron, alt: 'ron', name: 'ron', numero: 11 },
  { src: severus, alt: 'severus', name: 'severus', numero: 12 },
  { src: sirius, alt: 'sirius', name: 'sirius', numero: 13 },
  { src: neville, alt: 'neville', name: 'neville', numero: 14 },
  { src: voldemort, alt: 'voldemort', name: 'voldemort', numero: 15 },
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
          <img src={src} alt={alt} className="h-32 sm:h-72 w-full mask" />
          <div className="flex flex-row justify-around">
            <p className="xl:text-3xl font-lonely-coffee">{name}</p>
            <p className="xl:text-3xl">{numero}</p>
          </div>
        </>
      ) : (
        <div
          className="bg-sirius h-full w-full flex items-center justify-center"
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

export const Harry_potter = () => {
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
    window.location.reload()
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
        <h1 className="xl:text-8xl text-4xl xl:mx-auto font-bold">Harry Potter</h1>
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
