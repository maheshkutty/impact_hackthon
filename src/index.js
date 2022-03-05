import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Candidate from "./Candidate";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  // <BrowserRouter>
  <React.StrictMode>
    <Auth0Provider
      domain="dev-4gzbsfxs.us.auth0.com"
      clientId="e04RX829HdPJzpsCT134TukigljHLNiW"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
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
