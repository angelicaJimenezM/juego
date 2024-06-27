import React, { useState } from 'react';
import nezuko from '../assets/Image/anime/nezuko.png'
import inosuke from '../assets/Image/anime/inosuke.png'
import gyomei from '../assets/Image/anime/Gyomei.png'
import kanao from '../assets/Image/anime/kanao.png'
import mitsuri from '../assets/Image/anime/Mitsuri.png'
import muzan from '../assets/Image/anime/muzan.png'
import obanai from '../assets/Image/anime/Obanai.png'
import regoku from '../assets/Image/anime/rengoku.png'
import sanemi from '../assets/Image/anime/sanemi.png'
import tamayo from '../assets/Image/anime/tamayo.png'
import tanjiro from '../assets/Image/anime/tajiro.png'
import shinobu from '../assets/Image/anime/shinobu.png'
import tokito from '../assets/Image/anime/Tokito.png'
import uzui from '../assets/Image/anime/Uzui.png'
import zenitsu from '../assets/Image/anime/zenitsu.png'

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
          <p className='xl:text-xl'>{name}</p>
        </>
      ) : (
        <div className='bg-white h-full w-full flex items-center justify-center' style={{ transition: '.3s ease' }}>
          <h1 className='xl:text-8xl text-6xl'>X</h1>
        </div>
      )}
    </div>
  );
};

export const Anime = () => {
  return (
    <div>
      <h1 className='flex justify-center items-center text-5xl mb-6'>Anime</h1>
      <main className='grid xl:grid-cols-5 grid-cols-3 xl:gap-4 gap-3 text-center mx-4'>
        <ImageCard src={nezuko} alt="Hola" name="nezuko" />
        <ImageCard src={inosuke} alt="" name="inosuke" />
        <ImageCard src={regoku} alt="" name="rengoku" />
        <ImageCard src={tamayo} alt="" name="tamayo" />
        <ImageCard src={kanao} alt="" name="kanao" />
        <ImageCard src={tanjiro} alt="" name="tanjiro" />
        <ImageCard src={gyomei} alt="" name="gyomei" />
        <ImageCard src={mitsuri} alt="tam" name="mitsuri" />
        <ImageCard src={muzan} alt="" name="muzan" />
        <ImageCard src={sanemi} alt="" name="sanemi" />
        <ImageCard src={obanai} alt="" name="obanai" />
        <ImageCard src={shinobu} alt="" name="shinobu" />
        <ImageCard src={tokito} alt="" name="tokito" />
        <ImageCard src={uzui} alt="" name="uzui" />
        <ImageCard src={zenitsu} alt="" name="zenitsu" />
      </main>
    </div>
  );
};
