import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./navigation";
import AuthProvider from "./utils/auth-provider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
