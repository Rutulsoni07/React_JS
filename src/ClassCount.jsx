import React, { Component } from "react";

export default class ClassCount extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleClick1 = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h2>Class Counter Component</h2>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Increment</button>
        <button onClick={this.handleClick1}>Decrement</button>
      </div>
    );
  }
}
