import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/Icons/logo.png';
import cofre from '../assets/Icons/cofre.png';
import tutorial from '../assets/Icons/tutorial.png';
import grafico from '../assets/Icons/grafico.png';
import dinero from '../assets/Icons/dinero.png';
import tienda from '../assets/Icons/tienda.png';
import medalla from '../assets/Icons/medalla.png';
import personalizar from '../assets/Icons/personalizar.png';
import fuego from '../assets/Icons/fuego.png';
import Inicio from '../assets/Icons/x.png';
import avatar_p from '../assets/Image/avatares/avatar_p.png';
import mini_avatar from '../assets/Image/avatares/mini_avatar.png';
import mini_amigo1 from '../assets/Image/avatares/mini_amigo1.png';
import mini_amigo2 from '../assets/Image/avatares/mini_amigo2.png';
import mini_amigo3 from '../assets/Image/avatares/mini_amigo3.png';
import mini_amigo4 from '../assets/Image/avatares/mini_amigo4.png';
import mini_amigo5 from '../assets/Image/avatares/mini_amigo5.png';

export const Home = () => {
    return (
        <>
        <div>
            <div className="absolute top-1 ml-a">
                <img src={logo} alt="Logo" className="xl:w-32 w-20" />
            </div>
            <header className="flex justify-between items-center bg-azul shadow-custom-light text-white xl:py-3 ml-2 py-2 xl:mt-5 mt-3 gap-1 rounded-3xl xl:text-3xl text-base">
                <Link to={'/Sele'} className="flex items-center">
                    <p className="xl:ml-32 ml-20">Juego</p> 
                </Link>
                <p>Agregar</p>
                <img src={fuego} alt="fuego" className="xl:h-16 h-9" />
                <img src={dinero} alt="dinero" className="xl:h-16 h-9" />
                <Link to={'/'}>
                    <img src={Inicio} alt="Inicio" className="xl:h-16 h-9" />
                </Link>
            </header>
            <main>
                <div className=" grid grid-cols-2 grid-rows-6 lg:grid-cols-4 lg:grid-rows-3 gap-2 xl:gap-6 mt-6 xl:mt-9 mx-2 xl:mx-24">
                    <div className="bg-gradient-to-b from-amarillo to-naranja row-span-3 lg:row-span-4 col-span-2 lg:col-span-1 rounded-3xl shadow-custom-light">
                        <img src={avatar_p} alt="" className="mask h-full w-full object-cover xl:ml-1 ml-4"/>
                    </div>
                    <div className="bg-red-600 rounded-lg shadow-custom-light flex flex-col text-center items-center justify-center">
                        <p className="text-2xl">Nombre</p>
                        <p>Puntuacion</p>
                        <img src={mini_amigo1} alt="" className="mask h-36 w-36 xl:h-48 object-cover"/>
                    </div>
                    <div className="bg-gradient-to-b from-amarillo to-naranja rounded-lg shadow-custom-light flex flex-col text-center items-center justify-center">
                        <p  className="text-2xl">Nombre</p>
                        <p>Puntuacion</p>
                        <img src={mini_amigo2} alt="" className="mask h-36 w-44 xl:h-48 object-cover"/>
                    </div>
                    <div className="bg-gradient-to-b from-amarillo to-naranja rounded-lg shadow-custom-light flex flex-col text-center items-center justify-center">
                        <p  className="text-2xl">Nombre</p>
                        <p>Puntuacion</p>
                        <img src={mini_amigo3} alt="" className="mask h-36 w-44 xl:h-48 object-cover"/>
                    </div>
                    <Link to="#">
                        <div className="bg-green-600 flex flex-col items-center rounded-b-bottom rounded-t-top shadow-custom-light xl:mx-14 py-2">
                            <img src={grafico} alt="grafico" className="xl:h-56 h-48" />
                        </div>
                    </Link>
                    <Link to="#">
                        <div className="bg-green-600 flex flex-col items-center rounded-b-bottom rounded-t-top shadow-custom-light xl:mx-11 py-7 text-white text-3xl">
                            <img src={tutorial} alt="tutorial" className="xl:w-40 w-32" />
                            <p>Tutorial</p>
                        </div>
                    </Link>
                    <div className="bg-pink-700 flex flex-col items-center justify-center rounded-b-bottom rounded-t-top shadow-custom-light xl:mx-14">
                        <img src={tienda} alt="tienda" className="h-36" />
                    </div>
                    <div className="bg-green-600 rounded-lg shadow-custom-light flex flex-col justify-center text-center text-white text-3xl">
                        <img src={personalizar} alt="personalizar" className="xl:h-32 h-20 mx-1" />
                        <p>Personalizar</p>
                    </div>
                    <div className="bg-green-600 rounded-lg shadow-custom-light flex flex-col text-center items-center justify-center">
                        <p className="text-2xl">Nombre</p>
                        <p>Puntuacion</p>
                        <img src={mini_amigo4} alt="" className="mask h-32 w-44 xl:h-48 object-cover"/>
                    </div>
                    <div className="bg-pink-700 rounded-lg shadow-custom-light flex xl:flex-col items-center justify-center xl:h-64 h-36 col-span-2 lg:col-span-1 row-span-2 lg:row-span-1">
                        <div>
                            <p className="text-2xl">Nombre</p>
                            <p>Puntuacion</p>
                        </div>
                        <img src={mini_amigo5} alt="" className="mask h-36 w-44 xl:h-48 object-cover"/>
                    </div>
                </div>
                <div className="flex xl:flex-row flex-col justify-between xl:mx-24 mt-3 text-white gap-2">
                    <div className="bg-red-600 xl:h-40 h-44 xl:w-1/3 w-96 rounded-3xl ml-2 xl:ml-0 flex flex-row">
                        <div className="w-2/5">
                            <img src={mini_avatar} alt="" className="mask h-36 object-cover"/>
                        </div>
                        <div className="flex flex-col items-center gap-6 mt-2">
                            <h1 className="text-2xl">Informacion</h1>
                            <p>Nombre del usuario</p>
                            <div className="flex flex-row gap-1">
                                <img src={medalla} alt="nivel" className="h-12" />
                                <p>Nivel o rango</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-gradient-to-b from-amarillo to-naranja xl:h-52 h-64 xl:w-1/3 w-96 rounded-3xl justify-center items-center gap-2 text-white ml-2">
                        <h1 className="text-xl">Ranking de jugadores</h1>
                        <ol>
                            <li className="flex flex-row gap-2">1.
                                <p>Nombre del jugador</p>
                                <img src={mini_amigo1} alt="" className="h-12 xl:h-10"/>
                                <p>Puntuacion</p>
                                <p>Ver mas...</p>
                            </li>
                            <li className="flex flex-row gap-2">2.
                                <p>Nombre del jugador</p>
                                <img src={mini_amigo3} alt="" className="h-12 xl:h-10"/>
                                <p>Puntuacion</p>
                                <p>Ver mas...</p>
                            </li>
                            <li className="flex flex-row gap-2">3.
                                <p>Nombre del jugador</p>
                                <img src={mini_amigo5} alt="" className="h-12 xl:h-10"/>
                                <p>Puntuacion</p>
                                <p>Ver mas...</p>
                            </li>
                            <li className="flex flex-row gap-2">4.
                                <p>Nombre del jugador</p>
                                <img src={mini_amigo2} alt="" className="h-12 xl:h-10"/>
                                <p>Puntuacion</p>
                                <p>Ver mas...</p>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row xl:justify-between xl:mx-24 mx-4 mt-8 gap-4 xl:gap-0">
                    <div className="bg-rosado flex flex-col xl:flex-row xl:w-96 w-full rounded-3xl gap-2 xl:pl-14 items-center text-white xl:text-5xl text-3xl px-4 py-2 xl:py-0 h-28 ">
                        <img src={cofre} alt="cofre" className="xl:w-20 w-16" />
                        <h1 className="text-center xl:text-left font-this-cafe">Desafios</h1>
                     </div>
    <div className="bg-green-500 flex xl:w-96 w-full rounded-3xl text-white items-center  xl:pl-14 pl-24 xl:text-5xl text-4xl  px-4 py-2 xl:py-0 h-24">
        <h2 className="text-center xl:text-left font-this-cafe">Friends List</h2>
    </div>

    </div>
    </main>
        </div>
        </>
    );
};
