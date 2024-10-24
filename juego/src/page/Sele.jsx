import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/Image/logo.png';
import { Reglas } from './Reglas';

export const Sele = () => {
  const [showReglas, setShowReglas] = useState(true); 

  const handleCloseReglas = () => {
    setShowReglas(false); // Esta función se usará tanto para el botón como para la imagen
  };

  return (
    <div className='min-h-screen bg-gradient-to-t from-naranja to-amarillo flex flex-col items-center justify-center'>
      
      {showReglas && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
          <Reglas onClose={handleCloseReglas} /> {/* Pasamos la función como prop */}
        </div>
      )}

      <div className="bg-green-700 rounded-full h-36 w-36 mb-6 flex items-center justify-center">
        <img src={logo} alt="logo" className="mt-10" />
      </div>

      <main className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-3'>
        <Link to={'/Seles_anime'}>
          <div className='h-96 rounded-xl bg-red-800 p-4'>
            <p className='text-black font-lonely-coffee'>Anime</p>
          </div>
        </Link>

        <Link to={'/Seles_peliculas'}>
          <div className='h-96 rounded-xl bg-red-800 p-4'>
            <p className='text-black font-lonely-coffee'>Pelicula</p>
          </div>
        </Link>

        <Link to={'/Sele_series'}>
          <div className='rounded-xl bg-red-800 p-4 h-96'>
            <p className='text-black font-lonely-coffee'>Serie</p>
          </div>
        </Link>

        <Link to={'/cantantes'}>
          <div className='rounded-xl bg-red-800 p-4 h-96 text-center'>
            <p className='text-black font-lonely-coffee'>Cantantes</p>
          </div>
        </Link>

        <Link to={'/actores'}>
          <div className='rounded-xl bg-red-800 p-4 h-96'>
            <p className='text-black font-lonely-coffee'>Actores</p>
          </div>
        </Link>

        <Link to={'/futbolistas'}>
          <div className='rounded-xl bg-red-800 p-4 h-96'>
            <p className='text-black font-lonely-coffee'>Futbolistas</p>
          </div>
        </Link>
      </main>
    </div>
  );
};
