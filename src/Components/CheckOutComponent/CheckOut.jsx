import { React, useContext } from "react";
import {
  CheckOutContainer,
  CheckoutHeader,
  CheckOutTotal,
  HeaderBlock,
} from "./Checkout.styles";
import CheckOutItem from "../CheckOutItem/CheckOutItem";
import { CartContext } from "../../Contexts/CartContext";
const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <CheckOutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return <CheckOutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <CheckOutTotal className="total">Total : ${cartTotal} </CheckOutTotal>
    </CheckOutContainer>
  );
};
export default CheckOut;
