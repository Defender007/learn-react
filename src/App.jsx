import React, { Component } from "react";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
import MainContent from './MainContent'
class App extends Component {
  render() {
    return (
    <React.Fragment>
    <NavBar />
    <ShoppingCart />
    </React.Fragment>
    );
  }
}

export default App;
