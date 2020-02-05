// Mainly added this to test react components

import React, { Component } from "react";
import "./header.scss";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header__logo">PriceRunner</h1>
        <p className="header__name">Made by: Ronge :)</p>
      </header>
    );
  }
}
