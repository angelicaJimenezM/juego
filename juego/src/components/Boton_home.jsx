import React from "react";
import { Link } from "react-router-dom";
import volver from "../assets/Icons/volver.png";

export const Boton_home = () => {
  return (
    <div className="xl:w-16 w-14">
      <Link to={'/Home'}>
        <img src={volver} alt="Volver" />
      </Link>
    </div>
  );
};
