import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Content_2 from "./homework/session_02/Content_2";
import Content2_Img from "./homework/session_02/Content2_Img";
import Content_3 from "./homework/session_03/Content_3";
import Content3_Img from "./homework/session_03/Content3_Img";
import Content_4 from "./homework/session_04/Content_4";
import Conten4_Img from "./homework/session_04/Conten4_Img";

function App() {
  return (
    <>
      <div id="wrapper">
        <div className="basic-UI text-center border border-5 border-warning">
          BASIC
          <div
            id="container1"
            className="row border border-2 rounded-3 mx-auto mt-4"
            style={{ width: "500px" }}
          >
            <Content2_Img />
            <Content_2 />
          </div>
          <div
            id="container2"
            className="border border-2 rounded-3 mx-auto mt-4"
            style={{ width: "500px" }}
          >
            <Content3_Img />
            <Content_3 />
          </div>
          <div
            id="container3"
            className="border border-2 rounded-3 mx-auto mt-4"
            style={{ width: "500px" }}
          >
            <Conten4_Img />
            <Content_4 />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
