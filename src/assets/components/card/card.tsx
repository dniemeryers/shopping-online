import React from 'react';
import {Card, Image, CardContent, ProductName, Description,Price, BuyButton} from './style'

// Definição da interface para os dados do produto
interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  buyLink: string;
}

// Componente do Cartão de Vendas
const ProductCard: React.FC<ProductCardProps> = ({ image, name, description, price, buyLink }) => {
  return (
    <Card>
      <Image src={image} alt={name} />
      <CardContent>
        <ProductName>{name}</ProductName>
        <Description>{description}</Description>
        <Price>{price}</Price>
      </CardContent>
      <BuyButton href={buyLink}>Comprar Agora</BuyButton>
    </Card>
  );
};

export default ProductCard;