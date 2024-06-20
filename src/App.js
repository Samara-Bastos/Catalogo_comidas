import './App.css';
import Cabecalho from './componentes/cabecalho';
import Filtro from './componentes/filtro';
import Quadro from './componentes/quadro';

function App() {
  return (
    <div className="App">
      <Cabecalho></Cabecalho>
      <div className="App-container">
        <Filtro></Filtro>
        <Quadro></Quadro>
      </div>
    </div>
  );
}

export default App;
