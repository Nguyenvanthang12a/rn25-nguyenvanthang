import React from "react";
import "../block-ui-1../Blockui.css";

interface DataRatingProps {
  data: {
    name: string;
    color: string;
    value: number;
  };
}

function ChartBar1({ data }: DataRatingProps) {
  return (
    <div>
      <div className="rating">
        <div style={{ backgroundColor: "#cccccc" }} className="rating_row">
          <div
            style={{ backgroundColor: data.color }}
            className="rating_row_name"
          >
            <p className="rating__name">{data.name}</p>
          </div>
          <div className="rating_row_value">
            <div
              className="rating__value"
              style={{ backgroundColor: data.color, width: data.value + "%" }}
            >
              {data.value}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartBar1;
