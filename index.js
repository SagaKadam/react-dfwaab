// constructor run only once when it initally renderd

import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import Child from "./child";

class App extends Component {
  state = {
    name: "Sagar"
  };

  constructor() {
    super();
    this.state = {
      name: "Rohan"
    };
    console.log("Constructor");
  }

  componentWillMount() {
    if (window.innerWidth < 500) {
      this.setState({ innerWidth: window.innerWidth });
    }
    console.log("componentWillMount");
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  changeState() {
    this.setState({ name: "Diksha" });
  }

  unmountChild(){
    this.setState({name: 'Sumit'})
     console.log("unmountChild");
  }

  render() {
    console.log("render");
    if(this.state.name === 'Sumit'){
        return(<div />)
    }
    else{
    return (
      <div>
        <p>
          name: {this.state.name}| innerWidth: {this.state.innerWidth}
        </p>
        <Child name={this.state.name} />
        <button onClick={this.changeState.bind(this)}>Change State</button>
        <button onClick={this.unmountChild.bind(this)}>Unmount Child</button>
      </div>
    );
    }
  }
}

render(<App />, document.getElementById("root"));
