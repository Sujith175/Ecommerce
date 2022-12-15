import React from "react";
import "../Navigation/navigation.styles.scss";
import { Outlet, Link } from "react-router-dom";
import crown from "../../assets/crown.svg";
import { useContext } from "react";
import CartIcon from "../../Components/Cart-icon/CartIconComponent";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { userContext } from "../../Contexts/Contexts";
import CartDropDown from "../../Components/CartDropDown/CartDropDown";
import { CartContext } from "../../Contexts/CartContext";

const Navigation = () => {
  const { currentUser } = useContext(userContext);
  const { isCartOpen } = useContext(CartContext);
  // const signOutHandler = async () => {
  //   await signOutUser();
  //   // setCurrentUser(null);         used observer pattern
  // };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <img alt="" className="logo" src={crown} />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
