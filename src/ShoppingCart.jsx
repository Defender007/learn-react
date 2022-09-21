import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    console.log("constructor - ShoppingCart");
    this.state = {
      products: [
        { id: 1, productName: "iPhone14", price: 8090, quantity: 9 },
        { id: 2, productName: "Samsung Galaxy s17", price: 8075, quantity: 10 },
        { id: 3, productName: "iPad Pro", price: 1000, quantity: 0 },
        { id: 4, productName: "Ps 5", price: 9000, quantity: 4 },
        { id: 5, productName: "Dell Monitor", price: 8679, quantity: 29 },
      ],
    };
  }

  render() {
    console.log("render - ShoppingCart");
    return (
      <div className="container-fluid">
        <h4>ShoppingCart</h4>

        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
          ;
        </div>
      </div>
    );
  }
  //   render ends here

  //   Executes after constructor and render method
  //   (includes life-cycle of child components, if any) of current component
  componentDidMount() {
    console.log("componentDidMount - ShoppingCart");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdate - ShoppingCart",
      prevProps,
      prevState,
      this.props,
      this.state
    );j
  }

  handleIncrement = (product, maxValue) => {
    console.log("handleIncrement: ", product);
    let allProducts = [...this.state.products];
    const index = allProducts.indexOf(product);
    // console.log(index)
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
    }
    this.setState({ products: allProducts });
  };
  handleDecrement = (product, minValue) => {
    console.log("handleDecrement: ", product);
    let allProducts = [...this.state.products];
    const index = allProducts.indexOf(product);
    // console.log(index)
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
    }
    this.setState({ products: allProducts });
  };

  handleDelete = (product) => {
    console.log("handleDecrement: ", product);
    let allProducts = [...this.state.products];
    const index = allProducts.indexOf(product);
    // console.log(index)
    if (window.confirm("Are you sure to delete?")) {
      allProducts.splice(index, 1);
    }
    this.setState({ products: allProducts });
  };
}
