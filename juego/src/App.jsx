import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sele } from "./page/Sele.jsx";
import { Serie } from './page/Serie.jsx';
import { Anime } from './page/Anime.jsx';
import { Actores } from './page/Actores.jsx';
import { Cantantes } from './page/Cantantes.jsx';
import { Futbolista } from './page/Futbolista.jsx';
import { Pelicula } from './page/Pelicula.jsx';
import { Inicio } from "./page/Inicio.jsx";
import { Home } from "./page/Home.jsx";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Sele' element={<Sele />} />
          <Route path='/serie' element={<Serie />} />
          <Route path='/Anime' element={<Anime />} />
          <Route path='/Actores' element={<Actores />} />
          <Route path='/Cantantes' element={<Cantantes />} />
          <Route path='/Futbolistas' element={<Futbolista />} />
          <Route path='/Pelicula' element={<Pelicula />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
