import React from "react";
import {
  CartItemContainer,
  CartItemName,
  ItemDetails,
} from "./CartItem.styles";

const CartItem = ({ cartItem }) => {
  return (
    <CartItemContainer>
      <img src={cartItem.imageUrl} alt="" />
      <ItemDetails>
        <CartItemName>{cartItem.name}</CartItemName>
        <span>
          {cartItem.quantity} x ${cartItem.price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
