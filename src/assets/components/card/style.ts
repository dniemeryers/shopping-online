import styled from 'styled-components';

export const Card = styled.div`
position:relative;
 
  border-radius: 8px;
  overflow: hidden;
  width: 180px;
  margin: 10px 10px 20px 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  
  margin:auto;
`;

export const CardContent = styled.div`
  padding: 15px;
`;

export const ProductName = styled.h2`
  margin-top: 0;
  font-size:16px;
  text-align:center;
`;

export const Description = styled.p`
  margin-bottom: 10px;
  font-size: 12px;
  text-align:center;
`;

export const Price = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  text-align:center;
  color: #007bff;
`;

export const BuyButton = styled.a`
  display: block;
  width: 100%;
  padding: 10px;
  text-align: center;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 0 0 8px 8px;
  cursor: pointer;
  

`;