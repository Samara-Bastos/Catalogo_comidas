import './estilo.css';
import Logo from '../../icones/logo.svg';
import Lupa from '../../icones/lupa.svg';

function Cabecalho(){
    return(
        <div className='cabecalho'>
            <img src={Logo} alt='logo'></img>
            <span>Catálogo de comidas</span>
            <a href="https://www.ifood.com.br/" target="_blank" rel="noreferrer">
                <button className='div-input'>
                    Faça seu pedido
                    <img className='lupa' src={Lupa} alt='pesquisar'></img>
                </button>
            </a>
        </div>
    )
}

export default Cabecalho;