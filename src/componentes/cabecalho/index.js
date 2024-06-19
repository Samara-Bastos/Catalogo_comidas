import './estilo.css';
import Logo from '../../icones/logo.svg';
import Lupa from '../../icones/lupa.svg';

function Cabecalho(){
    return(
        <div className='cabecalho'>
            <div className='div-logo'>  
                <img src={Logo} alt='logo'></img>
                <span>Catálogo de comidas</span>
            </div>
            <div className='div-input'>
                <input type='text' className='input' />
                <img className='lupa' src={Lupa} alt='pesquisar'></img>
            </div>
        </div>
    )
}

export default Cabecalho;