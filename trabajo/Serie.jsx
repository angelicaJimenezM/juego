import React, { useState } from 'react';
import eloise from '../assets/Image/serie/eloise.png';
import hermano_1 from '../assets/Image/serie/hermano1.png';
import castrosa from '../assets/Image/serie/castrosa.png';
import castrosa2 from '../assets/Image/serie/prudence.png';
import conde from '../assets/Image/serie/a.png';
import daphne from '../assets/Image/serie/daphne.png';
import edwina from '../assets/Image/serie/edwina.png';
import francesca from '../assets/Image/serie/francesca.png';
import hermano_2 from '../assets/Image/serie/hermano2.png';
import hermano_3 from '../assets/Image/serie/hermano3.png';
import kate from '../assets/Image/serie/kate.png';
import lord from '../assets/Image/serie/lord.png';
import madre_b from '../assets/Image/serie/madre_b.png';
import penelope from '../assets/Image/serie/e.png';
import principe from '../assets/Image/serie/principe.png';

const ImageCard = ({ src, alt, name }) => {
  const [showImage, setShowImage] = useState(true);

  const handleClick = () => {
    setShowImage(false);
  };

  return (
    <div className='estilo rounded-lg overflow-hidden transform skew-y-2 xl:text-4xl text-lg' onClick={handleClick}>
      {showImage ? (
        <>
          <img src={src} alt={alt} className='tam w-full' />
          <p className=' '>{name}</p>
        </>
      ) : (
        <div className='bg-white h-full w-full flex items-center justify-center' style={{ transition: '.3s ease' }}>
          <h1 className='xl:text-8xl text-6xl'>X</h1>
        </div>
      )}
    </div>
  );
};

export const Serie = () => {
  return (
    <div>
      <h1 className='flex justify-center items-center text-5xl mb-6'>Series</h1>
      <main className='grid xl:grid-cols-5 grid-cols-3 xl:gap-4 gap-3 text-center mx-2'>
        <ImageCard src={eloise} alt="Hola" name="Eloise" />
        <ImageCard src={hermano_1} alt="" name="Anthony" />
        <ImageCard src={hermano_2} alt="" name="Benedict" />
        <ImageCard src={hermano_3} alt="" name="Colin" />
        <ImageCard src={castrosa} alt="" name="Philipa" />
        <ImageCard src={castrosa2} alt="" name="Prudence" />
        <ImageCard src={daphne} alt="" name="Daphane" />
        <ImageCard src={edwina} alt="tam" name="Edwina" />
        <ImageCard src={francesca} alt="" name="Francesca" />
        <ImageCard src={conde} alt="" name="Simon" />
        <ImageCard src={kate} alt="" name="Kate" />
        <ImageCard src={lord} alt="" name="Debling" />
        <ImageCard src={madre_b} alt="" name="Violet" />
        <ImageCard src={penelope} alt="" name="Penelope" />
        <ImageCard src={principe} alt="" name="Friederich" />
      </main>
    </div>
  );
};
