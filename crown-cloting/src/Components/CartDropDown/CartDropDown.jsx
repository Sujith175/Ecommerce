import React from "react";
import Button from "../Button/ButtonComponent";
import "../CartDropDown/CartDropDown.Styles.scss";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import CartItem from "../CartItem/CartItem";
const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your Cart is Empty</span>
        )}
      </div>
      <Button>Check Out</Button>
    </div>
  );
};

export default CartDropDown;
