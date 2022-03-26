import React from "react";
import Currency from "./Currency";
import MiniCart from "./MiniCart";
import Nav from "./Nav";

class Header extends React.Component {
  render() {
    return (
      <>
        <Nav />
        {/* {icon} */}
        <Currency />
        <MiniCart />
      </>
    );
  }
}

export default Header;
