import React from "react";
import ChartBar1 from "./Chartbar1";
import "./Blockui.css";

function ChartBar() {
  let dataRatings = [
    { name: "BANDWIDTH", color: "#E54D4C", value: 20 },
    { name: "STORAGE", color: "#2EB9CE", value: 50 },
    { name: "USERS", color: "#4AC25E", value: 70 },
    { name: "VISITORS", color: "#E9C318", value: 30 },
    { name: "EMAILS", color: "#BB70D5", value: 45 },
    { name: "BASIC", color: "#EB59D4", value: 80 },
    { name: "OTHERS", color: "#5892DB", value: 37 },
  ];
  const list = dataRatings.map((dataRating) => (
    <ChartBar1 key={dataRating.name} data={dataRating} />
  ));
  return (
    <div>
      <div>{list}</div>
    </div>
  );
}

export default ChartBar;
