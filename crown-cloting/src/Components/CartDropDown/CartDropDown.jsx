import React from "react";
import Button from "../Button/ButtonComponent";
import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./CartDropDown.Styles";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { useNavigate } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
const CartDropDown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
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
