import React from "react";
import { Link } from "react-router-dom";
import avengers from '../../assets/Image/sele_peliculas/avengers.png';
import a_ciegas from '../../assets/Image/sele_peliculas/a_ciegas.jpg';
import harry_potter from '../../assets/Image/sele_peliculas/harry_potter.jpg';
import kung_fu_panda from '../../assets/Image/sele_peliculas/kung_fu_panda.jpg';
import Juegos_del_hambre from '../../assets/Image/sele_peliculas/los_juegos_del_hambre.jpg';
import son_como_niños from '../../assets/Image/sele_peliculas/son_como_niños.jpg';
import logo from '../../assets/Image/logo.png';
import { Boton } from "../../components/Boton";
export const Seles_peliculas = () => {
  return (
    <div className='min-h-screen bg-gradient-to-t from-naranja to-amarillo flex flex-col items-center justify-center'>
       <div className="bg-green-700 rounded-full h-36 w-36 mb-6 flex items-center justify-center">
        <img src={logo} alt="logo" className="mt-1" />
      </div>
      <div className="flex">
        <Boton/>
      <p className="font-lonely-coffee text-3xl">Pelicula</p>
      </div>
      <main className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-3'>
        <Link to={'/a_ciegas'}>
        <div className="h-96 rounded-xl bg-gray-800 p-4 bg-cover bg-center flex items-end justify-center" style={{backgroundImage:`url(${a_ciegas})`}}>
        <p className='text-white font-lonely-coffee text-xl'>A ciegas</p>
        </div>
        </Link>
        <Link to={'/Avergers'}>
          <div
            className="h-96 rounded-xl bg-gray-800 p-4 bg-cover bg-center flex items-end justify-center"
            style={{ backgroundImage: `url(${avengers})` }}>
          <p className='text-white font-lonely-coffee text-xl'>avengers</p>
          </div>
        </Link>
        <Link to={'/harry_potter'}>
          <div className="h-96 rounded-xl bg-gray-800 p-4 bg-cover bg-center flex items-end justify-center"
            style={{backgroundImage:`url(${harry_potter})`}}>
            <p className='text-white font-lonely-coffee text-xl'>Harry Potter</p>
          </div>
        </Link>
        <Link to={'/kung_fu_panda'}>
          <div className="h-96 rounded-xl bg-gray-800 p-4 bg-cover bg-center flex items-end justify-center"
              style={{backgroundImage:`url(${kung_fu_panda})`}}>
            <p className='text-white font-lonely-coffee text-xl'>kung fu panda</p>
          </div>
        </Link>
        <Link to={'/Juegos_del_hambre'}>
          <div className="h-96 rounded-xl bg-gray-800 p-4 bg-cover bg-center flex items-end justify-center"
              style={{backgroundImage:`url(${Juegos_del_hambre})`}}>
            <p className='text-white font-lonely-coffee text-xl'>Los juegos del hambre</p>
          </div>
        </Link>
        <Link to={'/son_como_niños'}>
          <div className="h-96 rounded-xl bg-gray-800 p-4 bg-cover bg-center flex items-end justify-center"
              style={{backgroundImage:`url(${son_como_niños})`}}>
            <p className='text-white font-lonely-coffee text-xl'>Son como niños</p>
          </div>
        </Link>
      </main>
    </div>
  );
};
