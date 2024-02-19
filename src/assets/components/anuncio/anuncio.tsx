import {useState, useEffect} from 'react';

import {Anunciar} from './style';

import LogoShop40 from '../../img/logo_shop40_branco-removebg-preview.png';
import Fechar from '../../img/fechar.png';


import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { NavLink } from 'react-router-dom';


export function Anuncio() {  
const [showAnuncio, setShowAnuncio] = useState(true);  

const handleClose = () => {
    setShowAnuncio(false);
  };

return(

    <>  
    {showAnuncio && (
    <Anunciar>
       
        <div className='informacao'>
        <img className="logoIcnv" src={LogoShop40} alt="" />
          <button className='fechar' onClick={handleClose}><div><img width="45px" src={Fechar} alt="" /></div></button>
        </div>
    </Anunciar> )}     


</>)}