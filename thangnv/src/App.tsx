import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  let islogin = true;
  return (
    <>
      <div id="wrapper">
        <Header checkLogin={islogin} />
        <Section />
        <Footer />
      </div>
    </>
  );
}

export default App;
