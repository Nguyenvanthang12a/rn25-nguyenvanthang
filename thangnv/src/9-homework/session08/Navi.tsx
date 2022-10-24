import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

type Props = {};

function Navi({}: Props) {
  return (
    <>
      <div>
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <Link className="nav-listpage" aria-current="true" to="/">
                  ListPage
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-from" to="/">
                  Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link detail" to="/">
                  Detail
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navi;
