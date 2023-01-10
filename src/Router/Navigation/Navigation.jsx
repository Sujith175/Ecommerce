import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import crown from "../../assets/crown.svg";
import { selectIsCartOpen } from "../../Store/Cart/CartSelector";
import CartIcon from "../../Components/Cart-icon/CartIconComponent";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../Store/User/userSelector";
import CartDropDown from "../../Components/CartDropDown/CartDropDown";

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLinks,
} from "./navigation.styles";
const Navigation = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const currentUser = useSelector(selectCurrentUser);
  // const signOutHandler = async () => {
  //   await signOutUser();
  //   // setCurrentUser(null);         used observer pattern
  // };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <div>
            <img alt="" className="logo" src={crown} />
          </div>
        </LogoContainer>
        <NavLinksContainer>
          <NavLinks to="/shop">Shop</NavLinks>
          {currentUser ? (
            <NavLinks as="span" onClick={signOutUser}>
              Sign Out
            </NavLinks>
          ) : (
            <NavLinks to="/auth">Sign In</NavLinks>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
