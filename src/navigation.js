import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GC from "./constants";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import MyAdsPage from "./pages/my-ads";
import AdminPage from "./pages/admin";
import BrandsAdminPage from "./pages/admin-brands";
import ModelsAdminPage from "./pages/admin-models";
import OptionsAdminPage from "./pages/admin-options";
import NewAd from "./pages/new-ad";
import EditAd from "./pages/edit-ad";
import AdDetailsPage from "./pages/ad-details";
import FavoritesPage from "./pages/favorites";
import AuthProvider from "./utils/auth";

const Navigation = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path={GC.ROUTES.USER.HOME} exact component={HomePage} />
          <Route path={GC.ROUTES.USER.LOGIN} component={LoginPage} />
          <Route path={GC.ROUTES.USER.REGISTER} component={RegisterPage} />
          <Route path={GC.ROUTES.USER.MYADS} component={MyAdsPage} />
          <Route path={GC.ROUTES.USER.NEWAD} component={NewAd} />
          <Route path={GC.ROUTES.USER.AD} component={AdDetailsPage} />
          <Route path={GC.ROUTES.USER.FAVORITES} component={FavoritesPage} />
          <Route path={GC.ROUTES.USER.EDITAD} component={EditAd} />
          <Route path={GC.ROUTES.ADMIN.PANEL} exact component={AdminPage} />
          <Route path={GC.ROUTES.ADMIN.BRANDS} component={BrandsAdminPage} />
          <Route path={GC.ROUTES.ADMIN.MODELS} component={ModelsAdminPage} />
          <Route path={GC.ROUTES.ADMIN.OPTIONS} component={OptionsAdminPage} />
          <Route path={GC.ROUTES.ADMIN.ADS} component={AdminPage} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Navigation;
