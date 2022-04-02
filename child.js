// constructor run only once when it initally renderd

import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

class Child extends Component {
  state = {
    name: "Sagar"
  };

  constructor() {
    super();
    this.state = {
      name: "Rohan"
    };
    console.log("Child Constructor");
  }

  componentWillMount() {
    if (window.innerWidth < 500) {
      this.setState({ innerWidth: window.innerWidth });
    }
  }

  componentWillReceiveProps() {
    console.log("Child componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidMount() {
    console.log("Child componentDidMount");
  }

  componentWillUpdate(){
    console.log("Child componentWillUpdate");
  }
  

  render() {
    console.log("Child render");
    return <div>Child Name: {this.props.name}</div>;
  }
}

export default Child;
