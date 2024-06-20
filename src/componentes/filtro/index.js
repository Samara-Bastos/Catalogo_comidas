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

const Imgs = [
    {src: Burguer, nome: 'Burguer'},
    {src: Bolo, nome: 'Bolo'},
    {src: Hotdog, nome: 'Hot dog'},
    {src: Bebidas, nome: 'Bebidas'},
    {src: Massas, nome: 'Massas'},
    {src: Pizza, nome: 'Pizzas'},
    {src: Pao, nome: 'Pães'},
    {src: Cafe, nome: 'Café'},
    {src: Frango, nome: 'Frangos'},
];

function Filtro(){
    return(
        <div className='filtros'>
            {
                Imgs.map( imagem => (
                    <div> 
                        <img src={imagem.src} alt={imagem.nome}></img>
                        <span>{imagem.nome}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Filtro;