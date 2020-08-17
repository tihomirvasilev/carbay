import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import MyAdsPage from "./pages/my-ads";
import AdminPage from "./pages/admin";
import BrandsAdminPage from "./pages/admin-brands";
import ModelsAdminPage from "./pages/admin-models";
import OptionsAdminPage from "./pages/admin-options";
import NewAd from "./pages/new-ad";
import AdDetailsPage from "./pages/ad-details";
import FavoritesPage from "./pages/favorites";
import AuthProvider from "./utils/auth";

const Navigation = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/my-ads" component={MyAdsPage} />
          <Route path="/new-ad" component={NewAd} />
          <Route path="/admin" exact component={AdminPage} />
          <Route path="/admin/brands" component={BrandsAdminPage} />
          <Route path="/admin/models" component={ModelsAdminPage} />
          <Route path="/admin/options" component={OptionsAdminPage} />
          <Route path="/admin/users" component={AdminPage} />
          <Route path="/admin/ads" component={AdminPage} />
          <Route path="/ad/:id" component={AdDetailsPage} />
          <Route path="/favorites" component={FavoritesPage} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Navigation;
