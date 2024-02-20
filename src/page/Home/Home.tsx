import {useState, useEffect} from 'react';
import {H1, Homens, Mulheres,Juventude,Container} from './style';

import ProductCard from '../../assets/components/card/card'

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
        "COMPRAS 100% SEGURAS",
        "CONFIRA AS PROMOÇÕES"            
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
                    <h2 className='descCat'>Acessórios<br/>Eletrônicos</h2>
                </div>

                <div className='categoria'>
                <img className="imagemCategoria"src={Foto2} alt="" />
                    <h2 className='descCat'>Roupa Feminina<br/>&<br/>Plus Size</h2>
                </div>

                <div className='categoria'>
                <img className="imagemCategoria"src={Foto2} alt="" />
                    <h2 className='descCat'>Roupa Masculina</h2>
                </div>

                <div className='categoria'>
                <img className="imagemCategoria"src={Foto2} alt="" />
                    <h2 className='descCat'>Tênis Mas/Fem</h2>
                </div>
                
            </div>
        </div>   

        <div className='destaques'>
            <h1 className='tituloCategoria'>DESTAQUES</h1>
            <div className='categorias'>
              
                <ProductCard
                    image="https://a-static.mlcdn.com.br/800x560/smartphone-xiaomi-redmi-9a-32gb-cinza-4g-octa-core-2gb-ram-653-cam-13mp-selfie-5mp-dual-chip/magazineluiza/226913400/88c3dcfd9320204adbd890b07c9e9f88.jpg"
                    name=""
                    description="Smartphone Xiaomi Redmi 9A 32GB Cinza 4G Octa-Core - 2GB RAM 6,53” Câm. 13MP + Selfie 5MP Dual Chip"
                    price="R$ 947,69"
                    buyLink="https://www.magazinevoce.com.br/magazineniemeyer/smartphone-xiaomi-redmi-9a-32gb-cinza-4g-octa-core-2gb-ram-653-cam-13mp-selfie-5mp-dual-chip/p/226913400/te/rdm7/"
                />

                <ProductCard
                    image="https://a-static.mlcdn.com.br/800x560/smartphone-samsung-galaxy-a14-128gb-preto-5g-octa-core-4gb-ram-66-cam-tripla-selfie-13mp/magazineluiza/236592000/5a8e7a9cd79a6007cb00c65d3827cd51.jpg"
                    name=""
                    description="Smartphone Samsung Galaxy A14 128GB Preto 5G Octa-Core 4GB RAM 6,6 Câm. Tripla + Selfie 13MP"
                    price="R$ 899,10"
                    buyLink="https://www.magazinevoce.com.br/magazineniemeyer/smartphone-samsung-galaxy-a14-128gb-preto-5g-octa-core-4gb-ram-66-cam-tripla-selfie-13mp/p/236592000/te/ga14/"
                />

                <ProductCard
                    image="https://a-static.mlcdn.com.br/800x560/apple-iphone-13-128gb-meia-noite-tela-61-12mp/magazineluiza/234661800/a57c1ab14765ab0b7ca87de98ba94b94.jpg"
                    name=""
                    
                    description="Apple iPhone 13 128GB Meia-noite Tela 6,1” 12MP - Apple iPhone 13 128GB Meia-noite Tela 6,1” 12MP"
                    price="R$ 3.799,00"
                    buyLink="https://www.magazinevoce.com.br/magazineniemeyer/apple-iphone-13-128gb-meia-noite-tela-61-12mp/p/234661800/te/ip13/"
                />

                <ProductCard
                    image="https://a-static.mlcdn.com.br/800x560/notebook-compaq-presario-snapdragon-7c-4gb-128gb-ufs-156-hd-windows-11/magazineluiza/236879000/03ca45b5e36e91628f615f9c315ea375.jpg"
                    name=""
                    description="Notebook Compaq Presario Snapdragon 7c 4GB - 128GB UFS 15,6” HD Windows 11"
                    price="R$ R$ 1.208,07"
                    buyLink="https://www.magazinevoce.com.br/magazineniemeyer/notebook-compaq-presario-snapdragon-7c-4gb-128gb-ufs-156-hd-windows-11/p/236879000/in/note/"
                />

                <ProductCard
                    image="https://a-static.mlcdn.com.br/800x560/notebook-hp-intel-core-i3-8gb-256gb-ssd-156-windows-11-256-g9/magazineluiza/237612600/efdbef0744b833112f7b98e184831cfb.jpg"
                    name=""
                    description="Notebook HP Intel Core i3 8GB 256GB SSD 15,6” - Windows 11 256 G9 "
                    price="R$ 2.305,47"
                    buyLink="https://www.magazinevoce.com.br/magazineniemeyer/notebook-hp-intel-core-i3-8gb-256gb-ssd-156-windows-11-256-g9/p/237612600/in/note/"
                />

                <ProductCard
                    image="https://a-static.mlcdn.com.br/800x560/relogio-smartwatch-blulory-glifo-ultra-max-49mm-cinza/alphaeletronicos/0f586f6479f111eeb0294201ac185040/ac8a9b58bbef6d17ee4700496eaee984.jpeg"
                    name=""
                    description="Relógio Smartwatch Blulory Glifo Ultra Max 49MM - Cinza"
                    price="R$ 251,23"
                    buyLink="https://www.magazinevoce.com.br/magazineniemeyer/relogio-smartwatch-blulory-glifo-ultra-max-49mm-cinza/p/gc9kafb1j4/te/smtw/"
                />

                <ProductCard
                    image="https://a-static.mlcdn.com.br/800x560/fone-de-ouvido-sem-fio-jbl-t520bt-bluetooth-5-3-com-microfone-e-bateria-57h/pegmix01/jblt520btblk/de117832f9451179c7f725ee0b461b2e.jpeg"
                    name=""
                    description="Fone De Ouvido Sem Fio JBL T520BT - Bluetooth 5.3 - Com Microfone e Bateria 57h"
                    price="R$ 266,50"
                    buyLink="https://www.magazinevoce.com.br/magazineniemeyer/fone-de-ouvido-sem-fio-jbl-t520bt-bluetooth-5-3-com-microfone-e-bateria-57h/p/kfjd99hfef/ea/hebl/"
                />

                <ProductCard
                    image="https://a-static.mlcdn.com.br/800x560/fone-de-ouvido-bluetooth-esportivo-air-beats-intra-auricular-com-microfone-preto/magazineluiza/236994800/2bd5f7eb5d5035c8455e9932fec6b307.jpg"
                    name=""
                    description="Smartphone Xiaomi Redmi 9A 32GB Cinza 4G Octa-Core - 2GB RAM 6,53” Câm. 13MP"
                    price="R$ 161,10"
                    buyLink="https://www.magazinevoce.com.br/magazineniemeyer/fone-de-ouvido-bluetooth-esportivo-air-beats-intra-auricular-com-microfone-preto/p/236994800/ea/fobt/"
                />

                <ProductCard
                    image="https://a-static.mlcdn.com.br/800x560/turbine-sua-tv-para-smart-com-netflix-play-store-e-youtube-emb-utilit/sonhovivomoda/295cd0c0dd2b11ed9fbf4201ac185033/9bdff951b7eea92c4d84c9324d5e7b1c.jpeg"
                    name=""
                    description="Turbine Sua Tv Para Smart Com Netflix Play Store E Youtube - EMB-UTILIT"
                    price="R$ 183,57"
                    buyLink="https://www.magazinevoce.com.br/magazineniemeyer/turbine-sua-tv-para-smart-com-netflix-play-store-e-youtube-emb-utilit/p/fd6adbe336/et/tvbx/"
                />

                <ProductCard
                    image="https://a-static.mlcdn.com.br/800x560/smart-tv-32-hd-led-semp-r6500-wi-fi-3-hdmi-1-usb/magazineluiza/235912900/adc8b92eb020fc7db108887f603233e1.jpg"
                    name=""
                    description="Smart TV 32” HD LED Semp R6500 Wi-Fi - 3 HDMI 1 USB"
                    price="R$ 1.044,05"
                    buyLink="https://www.magazinevoce.com.br/magazineniemeyer/smart-tv-32-hd-led-semp-r6500-wi-fi-3-hdmi-1-usb/p/235912900/et/elit/"
                />
               

                
            </div>
        </div>   
 
    </Container>
    
      
        
        
        </>
      )};
   