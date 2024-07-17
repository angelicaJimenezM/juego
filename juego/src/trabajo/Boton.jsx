import React from "react";
import { Link } from "react-router-dom";
import volver from "../assets/Icons/volver.png";

export const Boton = () => {
  return (
    <div className="xl:w-16 w-10">
      <Link to={'/'}>
        <img src={volver} alt="Volver" />
      </Link>
    </div>
  );
};
