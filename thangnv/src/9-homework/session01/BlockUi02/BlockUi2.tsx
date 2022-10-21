import React from "react";
import styles from "./BlockUi2.css";
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
    <div className={styles.container}>
      <div className={styles.text} style={{ backgroundColor: props.color }}>
        {props.text}
      </div>
      <div className={styles.plan} style={{}}>
        <div
          className={styles.plan_style}
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
