import React from "react";
import { Link } from "react-router-dom";
import stranger_things from '../../assets/Image/sele_series/stranger_things.jpg';
import game_of_thrones from '../../assets/Image/sele_series/game_of_thrones.jpg';
import the_crown from '../../assets/Image/sele_series/the_crown.jpg';
import la_reina_de_lagrimas from '../../assets/Image/sele_series/la_reina_de_lagrimas.jpg';
import la_casa_de_papel from '../../assets/Image/sele_series/la_casa_de_papel.jpg';
import bridgerton from '../../assets/Image/sele_series/bridgerton.png';
import logo from '../../assets/Image/logo.png';
import { Boton } from "../../components/Boton";

export const Sele_series = () => {
  return (
    <div className='min-h-screen bg-gradient-to-t from-naranja to-amarillo flex flex-col items-center justify-center'>
      <div className="bg-green-700 rounded-full h-36 w-36 mb-6 flex items-center justify-center">
        <img src={logo} alt="logo" className="mt-1" />
      </div>
      <div className="flex">
        <Boton/>
        <p className="font-lonely-coffee text-3xl">Series</p>
      </div>
      <main className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-3'>
        <Link to={'/stranger_things'}>
          <div className="h-96 rounded-xl bg-gray-800 p-4 bg-cover bg-center flex items-end justify-center" style={{backgroundImage:`url(${stranger_things})`}}>
            <p className='text-white font-lonely-coffee text-xl'>Stranger Things</p>
          </div>
        </Link>
        <Link to={'/game_of_thrones'}>
          <div className="h-96 rounded-xl bg-gray-800 p-4 bg-cover bg-center flex items-end justify-center" style={{backgroundImage:`url(${game_of_thrones})`}}>
            <p className='text-white font-lonely-coffee text-xl'>Game of Thrones</p>
          </div>
        </Link>
        <Link to={'/The_crown'}>
          <div className="h-96 rounded-xl bg-gray-800 p-4 bg-cover bg-center flex items-end justify-center" style={{backgroundImage:`url(${the_crown})`}}>
            <p className='text-white font-lonely-coffee text-xl'>The crown</p>
          </div>
        </Link>
        <Link to={'/la_reina_de_lagrimas'}>
          <div className="h-96 rounded-xl bg-gray-800 p-4 bg-cover bg-center flex items-end justify-center" style={{backgroundImage:`url(${la_reina_de_lagrimas})`}}>
            <p className='text-white font-lonely-coffee text-xl'>La reina de las lagrimas</p>
          </div>
        </Link>
        <Link to={'/la_casa_de_papel'}>
          <div className="h-96 rounded-xl bg-gray-800 p-4 bg-cover bg-center flex items-end justify-center" style={{backgroundImage:`url(${la_casa_de_papel})`}}>
            <p className='text-white font-lonely-coffee text-xl'>La casa de papel</p>
          </div>
        </Link>
        <Link to={'/bridgerton'}>
          <div className="h-96 rounded-xl bg-gray-800 p-4 bg-cover bg-center flex items-end justify-center" style={{backgroundImage:`url(${bridgerton})`}}>
            <p className='text-white font-lonely-coffee text-xl'>Bridgerton</p>
          </div>
        </Link>
      </main>
    </div>
  );
};
