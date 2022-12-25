import { React, useContext } from "react";

import { CartContext } from "../../Contexts/CartContext";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./CartIcon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartCount } =
    useContext(CartContext);

  const cartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartIconContainer onClick={cartToggle}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
