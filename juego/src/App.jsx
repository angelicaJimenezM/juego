import { useState } from 'react';
import './App.css';
import { Sele } from './trabajo/primer.jsx';
import { Segundo } from './trabajo/segundo.jsx';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>

   
        <Sele/>

    
    </div>
    
  );
}

export default App;
