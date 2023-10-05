import { Component } from "react";

class CounterByClass extends Component {
  state = {
    value: 0,
    isVisible: true,
    person: {
      name: "Hieu",
      age: 18,
    },
  };

  handleClick = () => {
    this.setState({
      ...this.state,
      value: this.state.value + 1,
    });
  };

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <button onClick={this.handleClick}>Increase</button>
      </div>
    );
  }
}

export default CounterByClass;
