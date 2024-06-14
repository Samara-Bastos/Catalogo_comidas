import './App.css';
import Cabecalho from './componentes/cabecalho';
import Filtro from './componentes/filtro';
import Quadro from './componentes/quadro';

function App() {
  return (
    <div className="App">
      <Cabecalho></Cabecalho>
      <header className="App-container">
        <Filtro></Filtro>
        <Quadro></Quadro>
      </header>
    </div>
  );
}

export default App;
