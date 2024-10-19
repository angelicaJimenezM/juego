import React from "react";
import { Link } from "react-router-dom";
import volver from "../assets/Icons/volver.png";

export const Boton_anime = () => {
  return (
    <div className="xl:w-16 w-14">
      <Link to={'/Seles_anime'}>
        <img src={volver} alt="Volver" />
      </Link>
    </div>
  );
};
