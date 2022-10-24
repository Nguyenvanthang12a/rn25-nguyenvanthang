import React, { Component } from "react";
import * as ReactIcons from "react-icons/ai";
interface Props {}

interface State {
  Likes: boolean;
}

class ClassLikeButton extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      Likes: true,
    };
  }
  handleLike = () => {
    this.setState({
      Likes: !this.state.Likes,
    });
  };
  public render() {
    return (
      <div>
        <button
          onClick={this.handleLike}
          style={{ margin: "25px", textAlign: "center" }}
        >
          {this.state.Likes ? (
            <ReactIcons.AiOutlineLike />
          ) : (
            <ReactIcons.AiTwotoneLike />
          )}
          {this.state.Likes ? "0" : "1"}
        </button>
      </div>
    );
  }
}

export default ClassLikeButton;
