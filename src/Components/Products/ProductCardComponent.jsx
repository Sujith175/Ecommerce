import React from "react";
import { BUTTON_TYPES_CLASSES } from "../Button/ButtonComponent";
import { ProductCartContainer, Footer, Name, Price } from "./product.styles";
import Button from "../Button/ButtonComponent";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
const ProductCard = ({ products }) => {
  const { addItemToCart } = useContext(CartContext);

  const { name, price, imageUrl } = products;
  const addProductToCart = () => addItemToCart(products);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt="" />

      <Footer>
        <Name>{name}</Name>
        <Price>{price}$</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
