import React from "react";
import Content2_Img from "./9-homework/session01/Basic1/Content2_Img";
import Content_2 from "./9-homework/session01/Basic1/Content_2";
import Content3_Img from "./9-homework/session01/Basic2/Content3_Img";
import Content_3 from "./9-homework/session01/Basic2/Content_3";
import Conten4_Img from "./9-homework/session01/Basic3/Conten4_Img";
import Content_4 from "./9-homework/session01/Basic3/Content_4";
import BlockUi02 from "./9-homework/session01/BlockUi02/BlockUi2";
import BlockUi1 from "./9-homework/session01/blockUi1/blockUi1";
import Login from "./Baitrenlop1/Login";

function App() {
  //let checkText = "BANDWIDTH";
  //let checkColor1 = "bg-danger";
  // let checkColors = "bg-danger";
  // let value = 20;
  return (
    <>
      <Content_2 />
      <Content_3 />
      <Content_4 />
      <Content2_Img />
      <Content3_Img />
      <Conten4_Img />
      {
        <BlockUI1
          text="BandWidth"
          color1="bg-red-700"
          colors="bg-red-400"
          value={20}
        />
      }
      {
        <BlockUI1
          text="BandWidth"
          color1="bg-red-700"
          colors="red"
          value={20}
        />
      }
      <BlockUi02 />
    </>
  );
}

export default App;
