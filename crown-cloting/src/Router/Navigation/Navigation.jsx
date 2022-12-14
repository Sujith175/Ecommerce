import React from "react";
import "../Navigation/navigation.styles.scss";
import { Outlet, Link } from "react-router-dom";
import crown from "../../assets/crown.svg";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { userContext } from "../../Contexts/Contexts";
const Navigation = () => {
  const { currentUser } = useContext(userContext);

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
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
