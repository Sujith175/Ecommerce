import { React, useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import "../CheckOutItem/checkoutItem.styles.scss";

const CheckOutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;
  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
  };
  const removeItemHandler = () => {
    removeItemFromCart(cartItem);
  };
  const addItemHandler = () => {
    addItemToCart(cartItem);
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
