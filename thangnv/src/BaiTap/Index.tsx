import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import ListPage from "./ListPage";
import Detail from "./Detail";
import Form from "../BaiTap/Form";
import "./styles.css";
function Index() {
  return (
    <div>
      <BrowserRouter>
        <ul className="navigation">
          <li className="link">
            <Link to="/">ListPage</Link>
          </li>
          <li className="link">
            <Link to="/Form">Form</Link>
          </li>
          <li className="link">
            <Link to="/Detail">Detail</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Detail" element={<Detail />} />
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Administrator Area</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Index;
