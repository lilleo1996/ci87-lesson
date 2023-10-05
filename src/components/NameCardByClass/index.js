import { Component } from "react";

class NameCardByClass extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
      </div>
    );
  }
}

export default NameCardByClass;
