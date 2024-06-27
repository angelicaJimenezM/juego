import React, { useState } from 'react';
import wanda from '../assets/Image/pelicula/wanda.png'
import loki from '../assets/Image/pelicula/Loki.png'
import hulk from '../assets/Image/pelicula/hulk.png'
import america from '../assets/Image/pelicula/america.png'
import aironman from '../assets/Image/pelicula/ironman.png'
import natasha from '../assets/Image/pelicula/natasha.png'
import spiderman from '../assets/Image/pelicula/spiderman.png'
import spiderman2 from '../assets/Image/pelicula/spiderman2.png'
import spiderman3 from '../assets/Image/pelicula/spiderman3.png'
import thanos from '../assets/Image/pelicula/thanos.png'
import thor from '../assets/Image/pelicula/thor.png'
import hokai from '../assets/Image/pelicula/hokai.png'
import strange from '../assets/Image/pelicula/strange.png'
import rocke from '../assets/Image/pelicula/rocket.png'
import vision from '../assets/Image/pelicula/vision.png'
const ImageCard = ({ src, alt, name }) => {
    const [showImage, setShowImage] = useState(true);
  
    const handleClick = () => {
      setShowImage(false);
    };
  
    return (
      <div className='estilo rounded-lg overflow-hidden transform skew-y-2 xl:text-2xl text-xs' onClick={handleClick}>
        {showImage ? (
          <>
            <img src={src} alt={alt} className='tam w-full' />
            <p className=''>{name}</p>
          </>
        ) : (
          <div className='bg-white h-full w-full flex items-center justify-center' style={{ transition: '.3s ease' }}>
            <h1 className='xl:text-8xl text-6xl'>X</h1>
          </div>
        )}
      </div>
    );
  };
  
  export const Pelicula = () => {
    return (
      <div>
        <h1 className='flex justify-center items-center text-5xl mb-6'>Pelicula</h1>
        <main className='grid xl:grid-cols-5 grid-cols-3 xl:gap-4 gap-3 text-center mx-2'>
          <ImageCard src={wanda} alt="Hola" name="Wanda" />
          <ImageCard src={loki} alt="" name="Loki" />
          <ImageCard src={natasha} alt="" name="Natasha" />
          <ImageCard src={spiderman} alt="" name="Spiderma" />
          <ImageCard src={spiderman2} alt="" name="Spiderma" />
          <ImageCard src={spiderman3} alt="" name="Spiderman" />
          <ImageCard src={america} alt="" name="Capitan America" />
          <ImageCard src={aironman} alt="tam" name="Airon Man" />
          <ImageCard src={hulk} alt="" name="Bruce" />
          <ImageCard src={thor} alt="" name="Thor" />
          <ImageCard src={thanos} alt="" name="Thanos" />
          <ImageCard src={hokai} alt="" name="Hokai" />
          <ImageCard src={strange} alt="" name="Stragen" />
          <ImageCard src={rocke} alt="" name="Rocket" />
          <ImageCard src={vision} alt="" name="Vision" />
        </main>
      </div>
);
};