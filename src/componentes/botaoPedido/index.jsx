import './style.css'
import Seta from '../../icones/lupa.svg';

function BotaoPedido(){
    return(
        <a href="https://www.ifood.com.br/" target="_blank" rel="noreferrer">
            <button className='div-input'>
                Faça seu pedido
                <img className='seta' src={Seta} alt='icone seta'></img>
            </button>
        </a>
    )
}

export default BotaoPedido;