import {useState, useEffect} from 'react';
import {H1, Homens, Mulheres,Juventude,Container} from './style';

import {Header} from '../../assets/components/header/header'
import {Anuncio} from '../../assets/components/anuncio/anuncio'


import Foto from '../../assets/img/homens.jfif';
import Foto2 from '../../assets/img/default.png';
import Foto3 from '../../assets/img/Altar_icnv.png';
import Aovivo from '../../assets/img/AOVIVO.png';


import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { NavLink } from 'react-router-dom';






    export function Home() {  
    
        
    const [text, count] = useTypewriter({
    words: [
        "CONFIRA",
        "AS PROMOÇÕES"            
    ],
    loop: true,
    delaySpeed: 2000,
});

    return(
        <>  
    <Anuncio/>
    <Header/>
    <Container>       
        <div className='bio'>
            <div className="imgs">                 
            </div>                        
            <h1 >{text}<Cursor cursorColor='#272727' /></h1>
        </div>

        <div className='produtos'>
            <h1 className='tituloCategoria'>CATEGORIAS</h1>
            <div className='categorias'>

                <div className='categoria'>
                <img className="imagemCategoria"src={Foto2} alt="" />
                    <h2 className='descCat'>Celular</h2>
                </div>

                <div className='categoria'>
                <img className="imagemCategoria"src={Foto2} alt="" />
                    <h2 className='descCat'>Celular</h2>
                </div>

                <div className='categoria'>
                <img className="imagemCategoria"src={Foto2} alt="" />
                    <h2 className='descCat'>Celular</h2>
                </div>

                <div className='categoria'>
                <img className="imagemCategoria"src={Foto2} alt="" />
                    <h2 className='descCat'>Celular</h2>
                </div>
                
            </div>
        </div>   

        <div className='ofertas'>
            <h1 className='tituloCategoria'>OFERTAS</h1>
            <div className='categorias'>

                <div className='categoria'>
                <img className="imagemCategoria"src={Foto2} alt="" />
                    <h2 className='descCat'>Celular</h2>
                </div>

                <div className='categoria'>
                <img className="imagemCategoria"src={Foto2} alt="" />
                    <h2 className='descCat'>Celular</h2>
                </div>

                <div className='categoria'>
                <img className="imagemCategoria"src={Foto2} alt="" />
                    <h2 className='descCat'>Celular</h2>
                </div>

                <div className='categoria'>
                <img className="imagemCategoria"src={Foto2} alt="" />
                    <h2 className='descCat'>Celular</h2>
                </div>

                <div className='categoria'>
                <img className="imagemCategoria"src={Foto2} alt="" />
                    <h2 className='descCat'>Celular</h2>
                </div>

                <div className='categoria'>
                <img className="imagemCategoria"src={Foto2} alt="" />
                    <h2 className='descCat'>Celular</h2>
                </div>

                <div className='categoria'>
                <img className="imagemCategoria"src={Foto2} alt="" />
                    <h2 className='descCat'>Celular</h2>
                </div>

                <div className='categoria'>
                <img className="imagemCategoria"src={Foto2} alt="" />
                    <h2 className='descCat'>Celular</h2>
                </div>

                <div className='categoria'>
                <img className="imagemCategoria"src={Foto2} alt="" />
                    <h2 className='descCat'>Celular</h2>
                </div>

                <div className='categoria'>
                <img className="imagemCategoria"src={Foto2} alt="" />
                    <h2 className='descCat'>Celular</h2>
                </div>

                <div className='categoria'>
                <img className="imagemCategoria"src={Foto2} alt="" />
                    <h2 className='descCat'>Celular</h2>
                </div>
                
                <div className='categoria'>
                <img className="imagemCategoria"src={Foto2} alt="" />
                    <h2 className='descCat'>Celular</h2>
                </div>

                <div className='categoria'>
                <img className="imagemCategoria"src={Foto2} alt="" />
                    <h2 className='descCat'>Celular</h2>
                </div>
                
            </div>
        </div>   
 
    </Container>
      
        
        
        </>
      )};
   