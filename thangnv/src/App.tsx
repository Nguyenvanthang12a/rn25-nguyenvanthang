import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div id="wrapper">
        <header id="header"></header>
        <section id="section" className="row">
          <div id="content-left" className="col-md-3">
            <ul id="nav">
              <li>
                <a href="">The Drive</a>
              </li>
              <li>
                <a href="">The Walk</a>
              </li>
              <li>
                <a href="">The Return</a>
              </li>
              <li>
                <a href="">The End</a>
              </li>
            </ul>
          </div>
          <div id="content-center" className="col-md-6">
            <h1>The Walk</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              ullam corrupti, vero reprehenderit obcaecati, pariatur laborum
              porro unde repudiandae itaque aperiam quam dicta illum commodi
              possimus iure cupiditate ad corporis.
            </p>
            <img
              src="http:thu.jpg.jpg"
              alt=""
            />
          </div>
          <div id="content-right" className="col-md-3">
            <ul id="nav-right">
              <li>
                <h1>What?</h1>
                <p>The Pulpit Rock is in way</p>
              </li>
              <li>
                <h1>Where?</h1>
                <p>The Pulpit Rock is in way</p>
              </li>
              <li>
                <h1>Price?</h1>
                <p>The walk is free!</p>
              </li>
            </ul>
          </div>
        </section>
        <footer id="footer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            necessitatibus ex, rem iure laborum tenetur tempore quia eligendi.
            Corporis cum nemo eum ipsam nostrum perspiciatis aperiam magni
            cumque neque totam!
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
