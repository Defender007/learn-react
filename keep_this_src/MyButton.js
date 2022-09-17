import React, { Component } from "react";

export default class MyButton extends Component {
  state = {
    name: "buttons",
    index: 0
  }
  
  
  onClick = (index) => {
    // const localIndex = ["Django", "React", "Spring", "Dotnet-core"];
    if (index < this.props.items.length){
      this.setState((state) => ({
        ...state,
        name: this.props.items[index],
        index: state.index + 1,
      }));
    } else {
      this.setState((state) => ({...state, name: "Button"})

      );
    }
     

    console.log("Current State: ", this.state);
    console.log("Current propsIndex: ", index);
  }

  

  render() {
    let index = this.state.index;
    console.log("Updated State: ", this.state);
    return (
    <button onClick={this.onClick.bind(null, index)}>
      {this.state.name}
    </button>);
  }
}

/**
 * I used this module to implement 
 * some state management concepts in Reactjs
 * I worked...I am happy! 
 */