import { React } from "react";
import {
  CheckOutContainer,
  CheckoutHeader,
  CheckOutTotal,
  HeaderBlock,
} from "./Checkout.styles";
import { selectCartTotal } from "../../Store/Cart/CartSelector";
import { selectCartItems } from "../../Store/Cart/CartSelector";
import { useSelector, useDispatch } from "react-redux";
import CheckOutItem from "../CheckOutItem/CheckOutItem";

const CheckOut = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
