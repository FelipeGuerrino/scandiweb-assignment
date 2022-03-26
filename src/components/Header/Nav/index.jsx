import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <>
        <Link to={"/"}>WOMEN</Link>
        <Link to={"/"}>MEN</Link>
        <Link to={"/"}>KIDS</Link>
      </>
    );
  }
}

export default Nav;
