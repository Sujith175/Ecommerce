import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen } from "../../Store/Cart/CartAction";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./CartIcon.styles";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../Store/Cart/CartSelector";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartToggle = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={cartToggle}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
