import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./navigation";
import AuthProvider from "./firebase/auth-provider";

import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
