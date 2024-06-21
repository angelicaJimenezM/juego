
import React from 'react';
import eloise from '../assets/Image/serie/eloise.png'
import hermano_1 from '../assets/Image/serie/hermano1.png'
import castrosa from '../assets/Image/serie/castrosa.png'
import castrosa2 from '../assets/Image/serie/castrosa2.png'
import conde from '../assets/Image/serie/conde.png'
import daphne from '../assets/Image/serie/daphne.png'
import edwina from '../assets/Image/serie/edwina.png'
import francesca from '../assets/Image/serie/francesca.png'
import hermano_2 from '../assets/Image/serie/hermano2.png'
import hermano_3 from '../assets/Image/serie/hermano3.png'
import kate from '../assets/Image/serie/kate.png'
import lord from '../assets/Image/serie/lord.png'
import madre_b from '../assets/Image/serie/madre_b.png'
import penelope from '../assets/Image/serie/penelope.png'
import principe from '../assets/Image/serie/principe.png'
export const Serie = () => {
  return (
    <div>
      <h1 className='flex justify-center items-center'>Series</h1>
      <main className='grid grid-cols-5 gap-2'>
      <div className='estilo'>
        <img src={eloise} alt="" />
        <p>Eloise</p>
      </div>
      <div className='estilo'>
        <img src={hermano_1} alt="" />
        <p>Anthony</p>
      </div>
      <div className='estilo'>
        <img src={hermano_2} alt="" />
        <p>Benedict</p>
      </div>
      <div className='estilo'>
        <img src={hermano_3} alt="" />
        <p>Colin</p>
        </div>
      <div className='estilo'>
        <img src={castrosa} alt="" />
        <p>philipa</p>
      </div>
      <div className='estilo'>
        <img src={castrosa2} alt="" />
        <p>Prudence</p>
      </div>
      <div className='estilo'>
        <img src={daphne} alt="" />
        <p>Daphane</p>
      </div>
      <div className='estilo'>
        <img src={edwina} alt="" />
        <p>Edwina</p>
      </div>
      <div className='estilo'>
        <img src={francesca} alt="" />
        <p>Francesca</p>
      </div>
      <div className='estilo'>
        <img src={conde} alt="" />
        <p>Simon</p>
      </div>
      <div className='estilo'>
        <img src={kate} alt="" />
        <p>Kate</p>
      </div>
      <div className='estilo'>
        <img src={lord} alt="" />
        <p>debling</p>
      </div>
      <div className='estilo'>
        <img src={madre_b} alt="" />
        <p>violet</p>
      </div>
      <div className='estilo'>
        <img src={penelope} alt="" />
        <p>Penelope</p>
      </div>
      <div className='estilo'>
        <img src={principe} alt="" />
        <p>friederich</p>
      </div>
      </main>
    </div>
  );
};
