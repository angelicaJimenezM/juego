import React from "react";
import { Link } from "react-router-dom";
import attack_on_titan from '../../assets/Image/seles_anime/attack_on_titan.jpg';
import demon_slayer from '../../assets/Image/seles_anime/demon_slayer.png';
import jujutsu_kaisen from '../../assets/Image/seles_anime/jujutsu_kaisen.jpg';
import my_hereo_academia from '../../assets/Image/seles_anime/my_hereo_academia.jpg';
import Sword_art_online from '../../assets/Image/seles_anime/sword_art_online.jpg';
import pecados from '../../assets/Image/seles_anime/7_pecados.jpg';
import logo from '../../assets/Image/logo.png';
import { Boton } from "../../components/Boton";
export const Seles_anime = () => {
  return (
    <div className='min-h-screen bg-gradient-to-t from-naranja to-amarillo flex flex-col items-center justify-center'>
       <div className="bg-green-700 rounded-full h-36 w-36 mb-6 flex items-center justify-center">
        <img src={logo} alt="logo" className="mt-1" />
      </div>
      <div className="flex">
        <Boton/>
      <p className="font-lonely-coffee text-3xl">Anime</p>
      </div>
      <main className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-3'>
        <Link to={'/demon_slayer'}>
        <div className="h-96 rounded-xl bg-gray-800 p-4 bg-cover bg-center flex items-end justify-center" style={{backgroundImage:`url(${demon_slayer})`}}>
          <p className='text-white font-lonely-coffee text-xl'>Demon slayer</p>
        </div>
        </Link>
        <Link to={'/Attack_on_titan'}>
          <div
            className="h-96 rounded-xl bg-gray-800 p-4 bg-cover bg-center flex items-end justify-center"
            style={{ backgroundImage: `url(${attack_on_titan})` }}>
            <p className='text-white font-lonely-coffee text-xl'>Attack on titan</p>
          </div>
        </Link>
        <Link to={'/Jujutsu_kaisen'}>
          <div className="h-96 rounded-xl bg-gray-800 p-4 bg-cover bg-center flex items-end justify-center"
            style={{backgroundImage:`url(${jujutsu_kaisen})`}}>
            <p className='text-white font-lonely-coffee text-xl'>Jujutsu kaisen</p>
          </div>
        </Link>
        <Link to={'/My_hereo_academia'}>
          <div className="h-96 rounded-xl bg-gray-800 p-4 bg-cover bg-center flex items-end justify-center"
              style={{backgroundImage:`url(${my_hereo_academia})`}}>
            <p className='text-white font-lonely-coffee text-xl'>My hero academia</p>
          </div>
        </Link>
        <Link to={'/Sword_art_online'}>
          <div className="h-96 rounded-xl bg-gray-800 p-4 bg-cover bg-center flex items-end justify-center"
              style={{backgroundImage:`url(${Sword_art_online})`}}>
            <p className='text-white font-lonely-coffee text-xl'>Sword art online</p>
          </div>
        </Link>
        <Link to={'/Pecados'}>
          <div className="h-96 rounded-xl bg-gray-800 p-4 bg-cover bg-center flex items-end justify-center"
              style={{backgroundImage:`url(${pecados})`}}>
            <p className='text-white font-lonely-coffee text-xl'>Los 7 pecados capitales</p>
          </div>
        </Link>
      </main>
    </div>
  );
};
