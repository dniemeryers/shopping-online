import styled from "styled-components"; 

export const Anuncio = styled.div`
display:flex;
flex-direction:column;
padding:0 20px 0 20px;

position:fixed;

width:100%;
height:100vh;
z-index:1001;
background-color:rgba(0,0,0,0.8);

.logoIcnv{
    margin-left: 20px;
    margin-top:10px;
    width:90px;
    height:90px;
}

.informacao{


margin-top:35px;
background-color:black;
height:70%;
width:370px;
box-shadow: 0px 0px 10px 5px white;

    @media (min-width: 800px) {
        height:80vh;
        width:70%;
}
}

.fechar{
    position:fixed;
    top:30px;  
    right:40px; 
    background-color:transparent;
    width:50px;
    height:50px;
    border-radius:7px;
    border:none;
    color:white;
    align-items: center;
    &:hover{
        cursor:pointer;
    }

    
}
.textoFechar{
    margin-top:0px;
    color:#d10000;
    margin-left:-5px;
    font-size:16px;
    font-weight:bold;
}


`


export const Container = styled.div`
color: black;
heigth:100%vh;
margin-top:54px;
margin-bottom:-100px;

@media (min-width: 800px) {
    margin-botton:50px;
}

.button {  
    display:flex;
    width: 200px;
    height: 50px;    
    margin:auto;
    margin-top:50px;
    border-radius:30px;
    text-align:center;
    color: black;
    font-size:18px;
    box-shadow: 0px 0px 10px 5px #454546;
    
    @media (min-width: 800px) {
        display:none;
    }
  }

  .button2 {  
    display:flex;
    width: 200px;
    height: 50px;    
    margin:auto;
    margin-top:15px;
    border-radius:30px;
    color: white;
    background-color:red;  
    font-size:18px;
    
    @media (min-width: 800px) {
        display:none;
    }
  }

.nossa_missao{
    background-color: #dddddd;
    padding: 1px 0 20px 0;

    @media (min-width: 800px) {
        width:70%;
        margin:auto;
    }
}

.missao{
    font-family: 'Anton', sans-serif;
    padding-bottom:20px;

    @media (min-width: 800px) {
        font-size: 40px;
    }
}

h2 {
    font-family: 'Dela Gothic One', cursive; 
    font-size:28px;   
    color:black;
    padding:0;
    margin:0;
    
    @media (min-width: 800px) {
        font-size: 50px;
        margin-left:100px;
    }
}

.igual_jesus{
    display:flex;
}

.letras_grandes{
    padding-left:10px;
    width:60vh;
    @media (min-width: 800px) {
        width:90%;
    }
}

.salvar{
    font-family: 'Anton', sans-serif;
    padding: 0 10px 0 10px;
    
    font-size: 20px;
    @media (min-width: 800px) {
        
        width:50%;
        font-size: 30px;
        padding-left:150px;
    }

}
img{   
    margin:auto;
    margin-left:-5px;
}

  a{
    text-decoration:none; 
    text-align:center;
    color:white;
}
.doacao{
   margin:auto;
   font-weight:bold;
}

.aovivo{
    margin:auto;
    font-weight:bold;
 }

.seta{
    width:60px;
    position:fixed;    
    right:15px;
    bottom:-600px;
    @media (max-width: 500px) {
        
    }
}

h1{   
    
    font-size:32px;
    font-family: 'Dela Gothic One', cursive;
    text-align:center;
    padding:0px;
    margin:0;
    margin-top:30px;
    margin-bottom:70px;
}



.bio{
    margin:0;
    padding:0;
    width:100%;
    display:flex;
    flex-direction:column;
}
    
.imgs{
   padding-top:10px;
   margin:auto;   
}

.icons{
    margin:7px;
    display:flex;    
}

p{
    margin:0px;
    margin-left:4px;
}

.perfil{   
    width:100%;
    margin:0;

    @media (min-width: 800px) {
        display:none;
    }
}

.perfil2{   
    width:100%;
    display:flex;
    margin:auto;

    @media (max-width: 800px) {
        display:none;
        
        
    }
}

.sobre{
    text-indent: 10%;
    text-align:justify;
    margin:10px;
}


`

export const H1 = styled.h1`
color: black;
text-align:center;
padding-top:150px;
padding-bottom:-30px;

`

export const Homens = styled.div`

display:flex;
flex-direction:column;
margin:0;
padding:0;
margin-top:10px;
margin-bottom:50px;
background-color:#00d7ff; 
box-shadow: 0px 0px 10px 5px #00d7ff;
   


@media (min-width: 800px) {
    flex-direction:row;
    width:100%;
    height:300px;
    margin:auto;
    margin-top:70px;
   

}

h1{
    color: #BFBFBF;
    margin-top:10px;
    color:black;
    text-align:center;
    font-size:26px;
    @media (min-width: 800px) {
        font-size:25px;
    }
    
}
h3{
    color: #BFBFBF;
    margin-top:-18px;
    text-align:center;
    color:black;
    @media (min-width: 800px) {
        font-size:18px;
    }
    
}


    @media (min-width: 1024px) {

    }
}
.info{
    text-align:justify;
    width:310px;
    margin:30px;
    border-radius:10px;
    margin:auto;
    
    @media (min-width: 800px) {
        padding:20px;
        
    }
}
    .texto{        
        color: white; 
        text-align:justify;      
        
        @media (min-width: 800px) {
            
            
            
        }   
}
img{   
    display:flex;
    margin:auto;
    margin-top:20px;
    

    }
p{
    color:white;
    margin:0;
    text-indent:20%;
   margin:20px;
   font-size:20px;
   @media (min-width: 800px) {
    font-size:22px;
   }
}


`
export const Mulheres = styled.div`

display:flex;
flex-direction:column;
margin:0;
padding:0;
margin-top:10px;

margin-bottom:50px;
background-color:#ff007f; 
box-shadow: 0px 0px 10px 5px #ff007f;
   


@media (min-width: 800px) {
    flex-direction:row;
    width:100%;
    height:300px;
    margin:auto;
    margin-top:70px;
   

}

h1{
    color: #BFBFBF;
    margin-top:10px;
    color:black;
    text-align:center;
    font-size:26px;
    @media (min-width: 800px) {
        font-size:25px;
    }
    
}
h3{
    color: #BFBFBF;
    margin-top:-18px;
    text-align:center;
    color:black;
    @media (min-width: 800px) {
        font-size:18px;
    }
    
}


    @media (min-width: 1024px) {

    }
}
.info{
    text-align:justify;
    width:310px;
    margin:30px;
    border-radius:10px;
    margin:auto;
    
    @media (min-width: 800px) {
        padding:20px;
        
    }
}
    .texto{        
        color: white; 
        text-align:justify;      
        
        @media (min-width: 800px) {
            
            
            
        }   
}
img{   
    display:flex;
    margin:auto;
    margin-top:20px;
    

    }
p{
    color:white;
    margin:0;
    text-indent:20%;
   margin:20px;
   font-size:20px;
   @media (min-width: 800px) {
    font-size:22px;
   }
}


`
export const Juventude = styled.div`

display:flex;
flex-direction:column;
margin:0;
padding:0;
margin-top:10px;
margin-bottom:50px;
background-color:#FFA500; 
box-shadow: 0px 0px 10px 5px #FFA500;
   


@media (min-width: 800px) {
    flex-direction:row;
   
    width:100%;
    height:300px;
    margin:auto;
    margin-top:70px;
   

}

h1{
    color: #BFBFBF;
    margin-top:10px;
    color:black;
    text-align:center;
    font-size:26px;
    @media (min-width: 800px) {
        font-size:25px;
    }
    
}
h3{
    color: #BFBFBF;
    margin-top:-18px;
    text-align:center;
    color:black;
    @media (min-width: 800px) {
        font-size:18px;
    }
    
}


    @media (min-width: 1024px) {

    }
}
.info{
    text-align:justify;
    width:310px;
    margin:30px;
    border-radius:10px;
    margin:auto;
    
    @media (min-width: 800px) {
        padding:20px;
        
    }
}
    .texto{        
        color: white; 
        text-align:justify;      
        
        @media (min-width: 800px) {
            
            
            
        }   
}
img{   
    display:flex;
    margin:auto;
    margin-top:20px;
    

    }
p{
    color:white;
    margin:0;
    text-indent:20%;
   margin:20px;
   font-size:20px;
   @media (min-width: 800px) {
    font-size:22px;
   }
}


`
