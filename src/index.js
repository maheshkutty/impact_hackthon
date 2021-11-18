import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Candidate from "./Candidate";

ReactDOM.render(
  // <BrowserRouter>
    <React.StrictMode>
      <App />
      {/* <Routes>
        <Route path="/" element={<App />} /> */}
        {/* <Route path="candidate" element={<Candidate />}>
          <Route path=":id" element={<Candidate />} />
        </Route> */}
      {/* </Routes> */}
    </React.StrictMode>,
  // </BrowserRouter>,
  document.getElementById("root")
);
