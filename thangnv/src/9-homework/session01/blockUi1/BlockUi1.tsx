import React from "react";
import "../blockUi1./BlockUi.css";

interface dataRatingProps {
  text: string;
  color1: string;
  colors: string;
  value: number;
}

function BlockUi1(props: dataRatingProps) {
  return (
    <>
      <div className="container_blockUI1 flex bg-slate-200 text-white m-3">
        <div
          className={`title flex justify-end min-w-[150px] p-2 ${props.color1}`}
        >
          <span className="uppercase">{props.text}</span>
        </div>
        <div className="block_horizontal flex grow">
          <div
            className={`horizontal_children flex items-center`}
            style={{
              backgroundColor: props.colors,
              width: `${props.value}%`,
            }}
          >
            <span className="pl-5">{props.value}%</span>
          </div>
          <div className="horizontal"></div>
        </div>
      </div>
    </>
  );
}

export default BlockUi1;
