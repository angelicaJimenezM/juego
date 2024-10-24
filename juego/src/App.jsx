import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sele } from "./page/Sele.jsx";
import { Seles_anime } from './page/categorias/Seles_anime.jsx';
import { Seles_peliculas } from './page/categorias/Seles_peliculas.jsx';
import { Sele_series } from './page/categorias/Sele_series.jsx';
import { Actores } from './page/Actores.jsx';
import { Cantantes } from './page/Cantantes.jsx';
import { Futbolista } from './page/Futbolista.jsx';
import { Reglas } from './page/Reglas.jsx';
import {Demon_slayer} from './page/anime/Demon_slayer.jsx'
import {Attack_on_titan} from './page/anime/Attack_on_titan.jsx'
import {Jujutsu_kaisen} from './page/anime/Jujutsu_kaisen.jsx'
import {My_hereo_academia} from './page/anime/My_hero_academia.jsx'
import {Sword_art_online} from './page/anime/Sword_art_online.jsx'
import {Pecados} from './page/anime/Pecados.jsx'
import { Avergers } from './page/peliculas/Avergers.jsx';
import { A_ciegas } from './page/peliculas/A_ciegas.jsx';
import { Harry_potter } from './page/peliculas/Harry_potter.jsx';
import { La_casa_de_papel } from './page/series/La_casa_de_papel.jsx';
import { Son_como_niños } from './page/peliculas/Son_como_niños.jsx';
import { Kung_fu_panda } from './page/peliculas/Kung_fu_panda.jsx';
import { Juegos_del_hambre } from './page/peliculas/Juegos_del_hambre.jsx';
import { Bridgerton } from './page/series/Bridgerton.jsx';
import { Game_of_thrones } from './page/series/Game_of_thrones.jsx';
import { Stranger_things } from './page/series/Stranger_things.jsx';
import { La_reina_de_lagrimas } from './page/series/La_reina_de_lagrimas.jsx';
import { The_crown } from './page/series/The_crown.jsx';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Sele />} />
          <Route path='/Sele_series' element={<Sele_series />} />
          <Route path='/Actores' element={<Actores />} />
          <Route path='/Cantantes' element={<Cantantes />} />
          <Route path='/Futbolistas' element={<Futbolista />} />
          <Route path='/Reglas' element={<Reglas />} />
          <Route path='/Seles_anime' element={<Seles_anime />} />
          <Route path='/Seles_peliculas' element={<Seles_peliculas />} />
          <Route path='/demon_slayer' element={<Demon_slayer />} />
          <Route path='/Attack_on_titan' element={<Attack_on_titan />} />
          <Route path='/Jujutsu_kaisen' element={<Jujutsu_kaisen />} />
          <Route path='/My_hereo_academia' element={<My_hereo_academia />} />
          <Route path='/Sword_art_online' element={<Sword_art_online />} />
          <Route path='/Pecados' element={<Pecados />} />
          <Route path='/Avergers' element={<Avergers />} />
          <Route path='/A_ciegas' element={<A_ciegas />} />
          <Route path='/Harry_potter' element={<Harry_potter />} />
          <Route path='/La_casa_de_papel' element={<La_casa_de_papel />} />
          <Route path='/Son_como_niños' element={<Son_como_niños />} />
          <Route path='/Kung_fu_panda' element={<Kung_fu_panda />} />
          <Route path='/Juegos_del_hambre' element={<Juegos_del_hambre />} />
          <Route path='/Bridgerton' element={<Bridgerton/>} />
          <Route path='/Game_of_thrones' element={<Game_of_thrones/>} />
          <Route path='/Stranger_things' element={<Stranger_things/>} />
          <Route path='/La_reina_de_lagrimas' element={<La_reina_de_lagrimas/>} />
          <Route path='/The_crown' element={<The_crown/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
