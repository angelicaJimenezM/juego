import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/Image/logo.png'

export const Inicio = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Usuario:', usuario);
    console.log('Contraseña:', password);
  };

  return (
    <>
      <div className="pricipal flex flex-col items-center justify-center ">
        <div className="max-w-xl w-full p-8  rounded-lg">
          <h1 className="text-5xl text-center mb-6 text-white font-lonely-coffee">Inicio</h1>
        
         
          <div className="bg-green-700 rounded-full h-36 w-36 mx-auto mb-6 flex items-center justify-center">
            <img src={logo} alt="" className="object-cover" />
          
          </div>
          <form className=" shadow-custom-light h-96 xl:h-2/3 w-full rounded-2xl bg-red-300" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3 mx-6 text-center ">
            <label htmlFor="usuario" className="text-lg mt-4 font-lonely-coffee">Usuario</label>
            <input
              type="text"
              id="usuario"
              placeholder="Nombre para identificarte"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 font-game"
              value={usuario}
              onChange={handleUsuarioChange}
            />
            <label htmlFor="password" className="text-lg font-lonely-coffee">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              value={password}
              onChange={handlePasswordChange}
            />
            <div className="flex flex-col justify-center gap-4">
              <a href="" className=" text-blue-600 text-xs">Olvide mi contraseña</a>
              <button
                className="bg-blue-400 text-black text-lg font-extrabold rounded-md py-4 hover:bg-blue-600 focus:outline-none font-this-cafe"
                type="submit"
              >
                Registrarse
              </button>
              <Link to={'/Home'}>
              <button
                className="bg-yellow-100 text-lg font-this-cafe text-black font-extrabold rounded-md px-6 py-4 w-full hover:bg-yellow-300 focus:outline-none"
                type="button"
              >
                Iniciar sesión
              </button>
              </Link>
            </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
