import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./pages/home";
import LoginPage from "./pages/login";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
