import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Currency from "../Currency";
import MiniCart from "./MiniCart";
import Nav from "./Nav";

class Header extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Currency />
        <MiniCart />
      </>
    );
  }
}

export default Header;
