import React from 'react';
import logo from '../assets/Image/logo.png';
import { Link } from 'react-router-dom';
import { Boton_home } from '../components/Boton_home';
export const Sele = () => {
  return (
    <div className='min-h-screen bg-gradient-to-t from-naranja to-amarillo flex flex-col items-center justify-center'>
      <div className="bg-green-700 rounded-full h-36 w-36 mb-6 flex items-center justify-center">
        <img src={logo} alt="logo" className="mt-10" />
      </div>
      <div className='flex justify-start w-full '>
        <Boton_home />
      </div>
      <main className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-3 '>
        <Link to={'/Anime'}>
          <div className='anime rounded-xl bg-gray-800 p-4'>
            <p className='text-white font-lonely-coffee'>Anime</p>
          </div>
        </Link>
        <Link to={'/Pelicula'}>
          <div className='peliculas rounded-xl bg-gray-800 p-4'>
            <p className='text-white font-lonely-coffee'>Pelicula</p>
          </div>
        </Link>
        <Link to={'/serie'}>
          <div className='series rounded-xl bg-gray-800 p-4'>
            <p className='text-white font-lonely-coffee'>Serie</p>
          </div>
        </Link>
        <Link to={'/Cantantes'}>
          <div className='cantantes rounded-xl bg-gray-800 p-4'>
            <p className='text-white font-lonely-coffee'>Cantantes</p>
          </div>
        </Link>
        <Link to={'/Actores'}>
          <div className='actores rounded-xl bg-gray-800 p-4'>
            <p className='text-white font-lonely-coffee'>Actores</p>
          </div>
        </Link>
        <Link to={'/Futbolistas'}>
          <div className='futbolistas rounded-xl bg-gray-800 p-4'>
            <p className='text-white font-lonely-coffee'>Futbolistas</p>
          </div>
        </Link>
      </main>
    </div>
  );
};
