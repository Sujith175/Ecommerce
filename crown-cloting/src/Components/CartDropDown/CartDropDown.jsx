import React from "react";
import Button from "../Button/ButtonComponent";
import "../CartDropDown/CartDropDown.Styles.scss";
const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>Check Out</Button>
    </div>
  );
};

export default CartDropDown;
