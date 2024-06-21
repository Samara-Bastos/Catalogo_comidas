import './estilo.css';
import { useState } from 'react';

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
    {src: Burguer, nome: 'Burguer', id: 0},
    {src: Bolo, nome: 'Bolo', id: 1},
    {src: Hotdog, nome: 'Hot dog', id: 2},
    {src: Bebidas, nome: 'Bebidas', id: 3},
    {src: Massas, nome: 'Massas', id: 4},
    {src: Pizza, nome: 'Pizzas', id: 5},
    {src: Pao, nome: 'Pães', id: 6},
    {src: Cafe, nome: 'Café', id: 7},
    {src: Frango, nome: 'Frangos', id: 8},
];


function Filtro({setCategoria}){
    const [ativo,setAtivo] = useState(0);

    const CategoriaClick = (id) => {
        setCategoria(id)
        setAtivo(id)
    };

    return(
        <div className='filtros'>
            {
                Imgs.map( imagem => (
                    <button 
                        key={imagem.id} 
                        className={ativo === imagem.id ? 'ativo' : ''}
                        onClick={() => CategoriaClick(imagem.id)}
                    > 
                        <img src={imagem.src} alt={imagem.nome}></img>
                        <span>{imagem.nome}</span>
                    </button>
                ))
            }
        </div>
    )
}

export default Filtro;