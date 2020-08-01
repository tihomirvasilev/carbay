import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import DashboardPage from "./pages/dashboard";
import AdminPanelPage from "./pages/admin-panel";

import { firebaseAuth } from "./utils/auth-provider";

const Navigation = () => {
  const { token } = useContext(firebaseAuth);
  console.log(token);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/admin-panel" component={AdminPanelPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
