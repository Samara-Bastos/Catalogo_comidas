import './App.css';
import { useState } from 'react';

import Cabecalho from './componentes/cabecalho';
import Filtro from './componentes/filtro';
import Quadro from './componentes/quadro';

function App() {
  const [categoria, setCategoria] = useState(0);

  return (
    <div className="App">
      <Cabecalho></Cabecalho>
      <div className="App-container">
        <Filtro setCategoria={setCategoria}></Filtro>
        <Quadro categoria={categoria}></Quadro>
      </div>
    </div>
  );
}

export default App;
