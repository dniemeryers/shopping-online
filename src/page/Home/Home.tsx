import {useState, useEffect} from 'react';
import {H1, Homens, Mulheres,Juventude,Container} from './style';

import {Header} from '../../assets/components/header/header'
import {Anuncio} from '../../assets/components/anuncio/anuncio'


import Foto from '../../assets/img/homens.jfif';
import Foto2 from '../../assets/img/aaltar_icnv.png';
import Foto3 from '../../assets/img/Altar_icnv.png';
import Aovivo from '../../assets/img/AOVIVO.png';


import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { NavLink } from 'react-router-dom';






export function Home() {  

    
        const [text, count] = useTypewriter({
        words: [
            "JESUS CRISTO",
            "É O SENHOR"            
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
                    <img className="perfil" src={Foto3} alt="" />
                    <img className="perfil2" src={Foto2} alt="" />                   
                </div>                        
                <h1 >{text}<Cursor cursorColor='#272727' /></h1>
            </div>
            <div className='nossa_missao'>
            <h1 className='missao'>NOSSA MISSÃO</h1>
            <div className='igual_jesus'>
              <div className='letras_grandes'>
                <h2>SER</h2>
                <h2>IGUAL</h2>
                <h2>A JESUS</h2>
              </div>
              <div>
                <p className='salvar'>PARA SALVAR, RETIRAR A HUMANIDADE DO REINO DAS TREVAS E INTRODUZIR O REINO DA LUZ.</p>
              </div>
            </div>
            </div>   

    <NavLink to="/dizimoseofertas"><div className="button" ><p className='doacao'>DÍZIMOS E OFERTAS</p></div></NavLink>
    <NavLink to="https://www.youtube.com/@icnvceramica8839/streams" target={"_blank"}><div className="button2" ><p className='aovivo'>CULTO AO VIVO</p><img src={Aovivo} width="30PX" alt="" /></div></NavLink>
    </Container>
        
        <H1>VENHA CONOSCO</H1>
        <Homens >             
            <div className='info'>
                <img src={Foto} width='200px' alt="" />
                <h1>CULTO DOS HOMENS</h1>
                <h3>1º SÁBADO DO MÊS</h3>
            </div>      
        </Homens>

        <Mulheres>             
            <div className='info'>
                <img src={Foto} width='200px' alt="" />
                <h1>CULTO DAS MULHERES</h1>
                <h3>2º SÁBADO DO MÊS</h3>
            </div>      
        </Mulheres>

        <Juventude>             
            <div className='info'>
                <img src={Foto} width='200px' alt="" />
                <h1>CULTO DA JUVENTUDE</h1>
                <h3>3º SÁBADO DO MÊS</h3>
            </div>      
        </Juventude>
        
        
        </>
      )};
   