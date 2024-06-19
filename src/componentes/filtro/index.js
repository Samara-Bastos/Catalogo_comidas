import './estilo.css';
import Bebidas from '../../icones/bebidas.svg';
import Bolo from '../../icones/bolo.svg';
import Burguer from '../../icones/burguer.svg';
import Hotdog from '../../icones/hotdog.svg';
import Massas from '../../icones/massas.svg';
import Pizza from '../../icones/pizza.svg';
import Pao from '../../icones/pao.svg';
import Cafe from '../../icones/cafe.svg';
import Frango from '../../icones/frango.svg';

function Filtro(){
    return(
        <div className='filtros'>
            <div> 
                <img src={Burguer} alt='Burguer'></img>
                <span>Burguer</span>
            </div>
            <div> 
                <img src={Bolo} alt='Bolo'></img>
                <span>Bolo</span>
            </div>
            <div> 
                <img src={Hotdog} alt='Hot dog'></img>
                <span>Hot Dog</span>
            </div>
            <div> 
                <img src={Bebidas} alt='Bebidas'></img>
                <span>Bebidas</span>
            </div>
            <div> 
                <img src={Massas} alt='Massas'></img>
                <span>Massas</span>
            </div>
            <div> 
                <img src={Pizza} alt='Pizza'></img>
                <span>Pizzas</span>
            </div>
            <div> 
                <img src={Pao} alt='Pão'></img>
                <span>Pães</span>
            </div>
            <div> 
                <img src={Cafe} alt='Café'></img>
                <span>Cafés</span>
            </div>
            <div> 
                <img src={Frango} alt='Frango'></img>
                <span>Frangos</span>
            </div>
        </div>
    )
}

export default Filtro;