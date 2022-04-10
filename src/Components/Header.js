import React from "react";
import { Link } from "react-router-dom";
import image from "../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={image} alt="" />
      <div>
        <Link to="/Shop">Shop</Link>
        <Link to="/Order">Order</Link>
        <Link to="/Inventory">Inventory</Link>
        <Link to="/AboutUs">About Us</Link>
      </div>
    </nav>
  );
};

export default Header;
