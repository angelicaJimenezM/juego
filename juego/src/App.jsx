import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sele } from './trabajo/Sele.jsx';
import { Serie } from './trabajo/Serie.jsx';
import { Anime } from './trabajo/Anime.jsx';
import { Actores } from './trabajo/Actores.jsx';
import { Cantantes } from './trabajo/Cantantes.jsx';
import { Futbolista } from './trabajo/Futbolista.jsx';
import { Pelicula } from './trabajo/Pelicula.jsx';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Sele />} />
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
