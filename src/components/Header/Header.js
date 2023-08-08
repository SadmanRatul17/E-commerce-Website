import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { AuthContext } from "../../Context/Context";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className="header">
      <img src={logo} alt="" srcset="" />
      <div className="options">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {user?.uid ? (
          <button onClick={logOut} className="signup">
            logOut
          </button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup" className="signup">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
