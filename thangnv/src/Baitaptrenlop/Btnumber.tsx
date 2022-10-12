import React, { Component } from "react";

type Props = {};

type State = {};

class Btnumber extends Component<Props, State> {
  constructor(porps: Props) {
    super(porps);

    this.state = {
      numberState: 0,
    };
  }
  handleClick = () => {
    this.setState({ numberState: this.state.numberState + 1 });
  };

  render() {
    return (
      <div>
        <p>btnumber{this.state.numberState}</p>
        <button onClick={this.handleClick}>Button</button>
      </div>
    );
  }
}

export default Btnumber;
