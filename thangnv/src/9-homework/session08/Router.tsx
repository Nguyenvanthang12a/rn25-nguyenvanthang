import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import ListPage from "./ListPage";
import Detail from "./Detail";
import Form from "./Form";
import FormUpdate from "./FormUpdate";
import "./Style.css";
function Router() {
  return (
    <div>
      <BrowserRouter>
        {/* Navigation */}
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
          <li className="link">
            <Link to="/FormUpdate">FormUpdate</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Detail/:id" element={<Detail />} />
          <Route path="/FormUpdate/:id" element={<FormUpdate />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
