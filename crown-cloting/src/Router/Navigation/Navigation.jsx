import React from "react";
import "../Navigation/navigation.styles.scss";
import { Outlet, Link } from "react-router-dom";
import crown from "../../assets/crown.svg";
const Navigation = () => {
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

          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
