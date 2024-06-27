import React from 'react';
import icono from '../assets/Icons/imagen.png';
import { Link } from 'react-router-dom';
export const Sele = () => {
return (
    
<div className='p-4 '>
<div className='flex justify-center'>
<img src={icono} alt="Icono" className='xl:w-72 w-60'/>
</div>
<div className='flex justify-center'>
<main className=' w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
<Link to={'/Anime'}>
    <div className='anime rounded-xl bg-gray-800 p-4 '>
    <p className='text-white'>Anime</p>
    </div>
</Link>
<Link to={'/Pelicula'}>
<div className='peliculas rounded-xl bg-gray-800 p-4'>
<p className='text-white'>Pelicula</p>
</div>
</Link>
<Link to={'/serie'}>
    <div className='series rounded-xl bg-gray-800 p-4'>
    <p className='text-white'>Serie</p>
    </div>
</Link>
<Link to={'/Cantantes'}>
    <div className='cantantes rounded-xl bg-gray-800 p-4'>
    <p className='text-white'>Cantantes</p>
    </div>
</Link>
<Link to={'/Actores'}>
    <div className='actores rounded-xl bg-gray-800 p-4'>
    <p className='text-white'>Actores</p>
    </div>
</Link>
<Link to={'/Futbolistas'}>
    <div className='futbolistas rounded-xl bg-gray-800 p-4'>
<   p className='text-white'>Futbolistas</p>
    </div>
</Link>
</main>
</div>
</div>
);
};