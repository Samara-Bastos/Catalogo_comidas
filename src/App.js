import './App.css';
import Cabecalho from './componentes/cabecalho';
import Filtro from './componentes/filtro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cabecalho></Cabecalho>
        <Filtro></Filtro>
      </header>
    </div>
  );
}

export default App;
