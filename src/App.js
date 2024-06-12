import './App.css';
import Cabecalho from './componentes/cabecalho';
import Filtro from './componentes/filtro';
import Quadro from './componentes/quadro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cabecalho></Cabecalho>
        <Filtro></Filtro>
        <Quadro></Quadro>
      </header>
    </div>
  );
}

export default App;
