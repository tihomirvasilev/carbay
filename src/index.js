import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./navigation";

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>,
  document.getElementById("root")
);
