import React from "react";
import { Link } from "react-router-dom";
import Inicio from "../assets/Icons/x.png";

export const Boton_inicio = () => {
  return (
    <div className="xl:w-16 w-14">
       <Link to={'/'}>
            <img src={Inicio} alt="Inicio" className="xl:h-16 h-9" />
        </Link>
    </div>
  );
};
