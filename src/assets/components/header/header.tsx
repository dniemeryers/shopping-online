import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Container2, Social} from './style';
import { motion, useAnimation } from 'framer-motion'


import { SocialIcon } from "react-social-icons"
import Foto from '../../img/perfil-diego.png'
import Aovivo from '../../img/AOVIVO.png'
import LogoShop40 from '../../img/logo_shop40_branco-removebg-preview.png'
import PDF from '../../img/pdf.png'


export function Header() {

  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }  

  const [igrejaHovered, setIgrejaHovered] = useState(false);

  const handleIgrejaHover = () => {
    setIgrejaHovered(true);
  };

  const handleIgrejaLeave = () => {
    setIgrejaHovered(false);
  };

  

  return (<>
    <Container style={{zIndex: '3'}}  >
      <div className="icons">
      <div className='logo'>
      <NavLink className={'navlink1'} to="/home"><img className="perfil" width="80px" src={LogoShop40} height="80px" alt="" /></NavLink>
     
     
            
          <h1>SHOP 40</h1>       
        
        </div>
        <div className="menu">
          <input type="checkbox" id="checkbox-menu"  checked={isMenuOpen} onChange={handleMenuClick} />
          <label style={{zIndex: '1'}} htmlFor="checkbox-menu">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className='links-desktop'>
        <NavLink className={'navlink'} to="/home">Home</NavLink>
        <div
        className={'navlink_igreja'} // Use uma classe para o link "Igreja"
        onMouseEnter={handleIgrejaHover}
        onMouseLeave={handleIgrejaLeave}
      >
        Categorias
        {igrejaHovered && ( // Renderize os links adicionais se igrejaHovered for verdadeiro
          <div className="igreja-links">
           <NavLink className={'child_navlink'} to="">Celular</NavLink>
          <NavLink className={'child_navlink'} to="/nossa_historia">Acessorios Eletrônico</NavLink>
          <NavLink className={'child_navlink'} to="/ondeEstamos">Roupa feminina/Plus Size</NavLink>
          <NavLink className={'child_navlink'} to="/lideranca">Roupa Masculina</NavLink>
          <NavLink className={'child_navlink'} to="/cttemidia">Tênis Masc/Fem</NavLink>
          </div>
        )}
      </div>
          
        
          <NavLink className={'navlink'} to="/projetos">Programação</NavLink>
                  
          
        </div>
      </div>
    </Container>
    <Container2 >
      <motion.div 
             initial={{
                y: -4500,
                opacity: 0,
             }}
             animate={{
                y: isMenuOpen ? '30rem' : '0%',
                
               
                opacity: isMenuOpen ? 1 : 0,
                
             }}
             transition={{
                duration: isMenuOpen ? 0.75 : 1,
                
             }}
             style={{ 
                position: !isMenuOpen ? 'relative':'fixed', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                             
             }}>
              
      <div className="nav" style={{ 
        display: isMenuOpen ? 'block' : 'none',
        
        }}>

        <NavLink to="/home">Home</NavLink>
        <h1>Igreja</h1>       
        <NavLink className="child" to="/nossa_historia">Declaração de fé</NavLink>
        <NavLink className="child" to="/nossa_historia">Nossa História</NavLink>
        <NavLink className="child" to="/ondeEstamos">Onde Estamos</NavLink>
        <NavLink className="child" to="/lideranca">Liderança</NavLink>
        <NavLink className="child" to="/cttemidia">Contatos e Mídias Sociais</NavLink>
        <NavLink to="/experiencia">Programação</NavLink>
        <NavLink to="/dizimoseofertas">Dízimos e Ofertas</NavLink>
        <NavLink to="https://www.youtube.com/@icnvceramica8839/streams" target={"_blank"}><div className="button2" ><p className='aovivo'>CULTO AO VIVO</p><img src={Aovivo} width="30PX" alt="" /></div></NavLink>
        
        <Social>
          <SocialIcon className='ic' url="https://www.instagram.com/icnvceramica/"
            fgColor='white'
            bgColor='transparent'
            target={"_blank"}/>
          <SocialIcon className='ic' url="https://www.youtube.com/channel/UCMsoMi0lmy4jjGTDljr47tg"
            fgColor='white'
            bgColor='transparent'
            target={"_blank"}/>
          <SocialIcon url="mailto:dniemeyers@gmail.com"
              fgColor='white'
              bgColor='transparent'
              target={"_blank"}/>    
          </Social>               
      </div>
      </motion.div>   
    </Container2>
    
  </>);
}
 