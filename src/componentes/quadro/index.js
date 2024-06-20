import './estilo.css';

import img01 from '../../imagens/01.jpg';
import img02 from '../../imagens/02.jpg';
import img03 from '../../imagens/03.jpg';
import img04 from '../../imagens/04.jpg';
import img05 from '../../imagens/05.jpg';
import img06 from '../../imagens/06.jpg';
import img07 from '../../imagens/07.jpg';
import img08 from '../../imagens/08.jpg';
import img09 from '../../imagens/09.jpg';
import img10 from '../../imagens/10.jpg';
import img11 from '../../imagens/11.jpg';
import img12 from '../../imagens/12.jpg';
import Pin from '../../icones/pin.svg';
import Descricao from '../../icones/descricao.svg';


const imgs = [img01,img02,img03,img04,img05,img06,img07,img08,img09,img10,img11,img12];

function Quadro(){

    return(
        <div className='container'>
            {
                imgs.map( (imgSelecionada) => (
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