import React from "react";
import Chartbar1 from ".";

function Chartbar() {
  let dataRatings = [
    { name: "BANDWIDTH", color: "#E54D4C", value: 20 },
    { name: "STORAGE", color: "#2EB9CE", value: 50 },
    { name: "USERS", color: "#4AC25E", value: 70 },
    { name: "VISITORS", color: "#E9C318", value: 30 },
    { name: "EMAILS", color: "#BB70D5", value: 45 },
    { name: "BASIC", color: "#EB59D4", value: 80 },
    { name: "OTHERS", color: "#5892DB", value: 37 },
  ];
  return (
    <div>
      <div>
        <Chartbar1 data={dataRatings[0]} />
        <br />
        <ChartBar1 data={dataRatings[1]} />
        <br />
        <ChartBar1 data={dataRatings[2]} />
        <br />
        <ChartBar1 data={dataRatings[3]} />
        <br />
        <ChartBar1 data={dataRatings[4]} />
        <br />
        <ChartBar1 data={dataRatings[5]} />
        <br />
        <ChartBar1 data={dataRatings[6]} />
      </div>
    </div>
  );
}

export default Chartbar;
