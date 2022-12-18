import React from "react";
import Button from "../Button/ButtonComponent";
import "../CartDropDown/CartDropDown.Styles.scss";
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
      <Button onClick={checkOutNavigateHandler}>Check Out</Button>
    </div>
  );
};

export default CartDropDown;
