import './estilo.css';
import Logo from '../../icones/logo.svg';

function Cabecalho(){
    return(
        <div className='cabecalho'>
            <img src={Logo} alt='logo'></img>
            <span>Catálogo de comidas</span>
            <div></div>
        </div>
    )
}

export default Cabecalho;