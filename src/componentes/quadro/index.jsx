import './estilo.css';
import {Imgs} from './imagens.jsx';

import Pin from '../../icones/pin.svg';
import Descricao from '../../icones/descricao.svg';


function Quadro({categoria}){
    
    return(
        <div className='container'>
            {
                Imgs[categoria].img.map((imgSelecionada) => (
                    <div className='div-imagem'>
                        <img src={imgSelecionada} alt='imagem'/>
                        <div className='descricao'>
                            <span>
                                <img src={Pin} alt='imagem'/>
                                Nome teste
                            </span>
                            <span>
                                <img src={Descricao} alt='imagem'/>
                                Uma breve descrição sobre a comida em destaque
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Quadro;