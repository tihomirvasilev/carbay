import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import firebase, { FirebaseContext } from "./firebase";
import useAuth from "./utils/auth";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import DashboardPage from "./pages/dashboard";
import AdminPage from "./pages/admin";
import BrandsAdminPage from "./pages/admin-brands";
import ModelsAdminPage from "./pages/admin-models";
import OptionsAdminPage from "./pages/admin-options";

const Navigation = () => {
  const user = useAuth();

  return (
    <BrowserRouter>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/admin" exact component={AdminPage} />
          <Route path="/admin/brands" component={BrandsAdminPage} />
          <Route path="/admin/models" component={ModelsAdminPage} />
          <Route path="/admin/options" component={OptionsAdminPage} />
          <Route path="/admin/users" component={AdminPage} />
          <Route path="/admin/ads" component={AdminPage} />
        </Switch>
      </FirebaseContext.Provider>
    </BrowserRouter>
  );
};

export default Navigation;
