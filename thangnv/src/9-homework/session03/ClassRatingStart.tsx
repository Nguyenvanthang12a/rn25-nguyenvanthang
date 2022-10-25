import React, { Component } from "react";
import * as ReactIcons from "react-icons/ai";
interface Props {}

interface Star {
  star: number;
}

class ClassRatingStart extends Component<Props, Star> {
  arrStar = [1, 2, 3, 4, 5];
  constructor(props: Props) {
    super(props);
    this.state = {
      star: 0,
    };
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        {this.arrStar?.map((index) => {
          return index <= this.state.star ? (
            <ReactIcons.AiOutlineLike key={index} />
          ) : (
            <ReactIcons.AiTwotoneLike key={index} />
          );
        })}
        <span style={{ marginLeft: "14px" }}>{this.state.star}</span>
      </div>
    );
  }
}

export default ClassRatingStart;
