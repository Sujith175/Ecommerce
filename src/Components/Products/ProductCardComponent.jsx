import React from "react";
import { BUTTON_TYPES_CLASSES } from "../Button/ButtonComponent";
import { ProductCartContainer, Footer, Name, Price } from "./product.styles";
import Button from "../Button/ButtonComponent";
import { selectCartItems } from "../../Store/Cart/CartSelector";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../Store/Cart/CartAction";
const ProductCard = ({ products }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = products;
  const addProductToCart = () => dispatch(addItemToCart(cartItems, products));

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
