import './estilo.css';

function Imagem(props){
    return(
        <div className='div-container'>
            <img src={props.src} alt=''></img>
    '   </div>
    )
    
}

export default Imagem;