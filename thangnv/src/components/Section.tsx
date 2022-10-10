import React from "react";
import threedog from "../img/thujbg.jpg";

type Props = {};

function Section({}: Props) {
  return (
    <>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ullam
            corrupti, vero reprehenderit obcaecati, pariatur laborum porro unde
            repudiandae itaque aperiam quam dicta illum commodi possimus iure
            cupiditate ad corporis.
          </p>
          <img src={threedog} alt="" />
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
    </>
  );
}

export default Section;
