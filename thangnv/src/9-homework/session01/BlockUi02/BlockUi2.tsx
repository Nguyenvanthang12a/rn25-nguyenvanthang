import React from "react";
import "./BlockUi2.css";
type Props = {};
interface BlockUI2 {
  text?: string;
  color?: string;
  color1?: string;
  plan?: number;
}
// Không truyền {} trong function là vì nó đã là 1 object
function Index(props: BlockUI2) {
  return (
    <div className="container">
      <div className="text" style={{ backgroundColor: props.color }}>
        {props.text}
      </div>
      <div className="plan" style={{}}>
        <div
          className="plan_style"
          style={{
            backgroundColor: `${props.color1}`,
            width: `${props.plan}%`,
          }}
        >
          {props.plan}%
        </div>
        <div className="" style={{}}></div>
      </div>
    </div>
  );
}

export default Index;
