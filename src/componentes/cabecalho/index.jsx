import './estilo.css';
import Logo from '../../icones/logo.svg';
import BotaoPedido from '../botaoPedido';


function Cabecalho(){
    return(
        <div className='cabecalho'>
            <img src={Logo} alt='logo'></img>
            <span>Catálogo de comidas</span>
            <BotaoPedido />
        </div>
    )
}

export default Cabecalho;