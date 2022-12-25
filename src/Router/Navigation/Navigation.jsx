import React from "react";

import { Outlet, Link } from "react-router-dom";
import crown from "../../assets/crown.svg";
import { useContext } from "react";
import CartIcon from "../../Components/Cart-icon/CartIconComponent";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { userContext } from "../../Contexts/Contexts";
import CartDropDown from "../../Components/CartDropDown/CartDropDown";
import { CartContext } from "../../Contexts/CartContext";
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLinks,
} from "./navigation.styles";
const Navigation = () => {
  const { currentUser } = useContext(userContext);
  const { isCartOpen } = useContext(CartContext);
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
