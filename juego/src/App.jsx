import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sele } from './trabajo/Sele.jsx';
import { Serie } from './trabajo/Serie.jsx';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Sele />} />
          <Route path='/serie' element={<Serie />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
