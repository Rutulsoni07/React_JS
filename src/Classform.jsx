import React, { Component } from "react";

export default class Classform extends Component {
  constructor() {
    super();

    this.state = {
      Name: "",
      Email: "",
      Password: "",
    };
  }
  handleSubmitForm = (e) => {
    e.preventDefault();
    // get values in console
    console.log(this.state.Name);
    console.log(this.state.Email);
    console.log(this.state.Password);
    e.target.reset();
  };

  render() {
    return (
      <div>
        <h2>Class Form</h2>
        <form onSubmit={this.handleSubmitForm}>
          <input
            type="text"
            placeholder="Enter Name"
            value={this.state.Name}
            onChange={(e) => this.setState({ Name: e.target.value })} // enter value in form
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Enter Email"
            value={this.state.Email}
            onChange={(e) => this.setState({ Email: e.target.value })}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            value={this.state.Password}
            onChange={(e) => this.setState({ Password: e.target.value })}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
