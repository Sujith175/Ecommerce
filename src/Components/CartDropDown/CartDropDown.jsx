import React from "react";
import Button from "../Button/ButtonComponent";
import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./CartDropDown.Styles";
import { useSelector } from "react-redux";

import { selectCartItems } from "../../Store/Cart/CartSelector";
import { useNavigate } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const checkOutNavigateHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={checkOutNavigateHandler}>Check Out</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
