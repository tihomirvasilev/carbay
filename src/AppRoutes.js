import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import GC from "./constants";

const HomePage = React.lazy(() => import("./pages/home"));
const LoginPage = React.lazy(() => import("./pages/login"));
const RegisterPage = React.lazy(() => import("./pages/register"));
const MyAdsPage = React.lazy(() => import("./pages/my-ads"));
const AdminPanel = React.lazy(() => import("./pages/admin"));
const BrandsAdminPage = React.lazy(() => import("./pages/admin-brands"));
const ModelsAdminPage = React.lazy(() => import("./pages/admin-models"));
const OptionsAdminPage = React.lazy(() => import("./pages/admin-options"));
const NewAd = React.lazy(() => import("./pages/new-ad"));
const EditAd = React.lazy(() => import("./pages/edit-ad"));
const AdDetailsPage = React.lazy(() => import("./pages/ad-details"));
const FavoritesPage = React.lazy(() => import("./pages/favorites"));
const SearchPage = React.lazy(() => import("./pages/search"));

const AppRouter = () => {
  const user = JSON.parse(localStorage.getItem("authUser"));

  const AuthRoute = ({ path, component }) => {
    return user ? (
      <Redirect to={"/"} />
    ) : (
      <Route path={path} component={component} />
    );
  };

  const PrivateRoute = ({ path, component }) => {
    return user ? (
      <Route path={path} component={component} />
    ) : (
      <Redirect to={"/login"} />
    );
  };

  function AdminRoute({ path, component }) {
    return user && user.isAdmin ? (
      <Route path={path} component={component} />
    ) : (
      <Redirect to={"/"} />
    );
  }

  return (
    <Switch>
      <Route path={GC.ROUTES.USER.HOME} exact component={HomePage} />
      <AuthRoute path={GC.ROUTES.USER.LOGIN} component={LoginPage} />
      <AuthRoute path={GC.ROUTES.USER.REGISTER} component={RegisterPage} />
      <Route path={GC.ROUTES.USER.AD} component={AdDetailsPage} />
      <Route path={GC.ROUTES.USER.SEARCH} component={SearchPage} />
      <PrivateRoute path={GC.ROUTES.USER.MYADS} component={MyAdsPage} />
      <PrivateRoute path={GC.ROUTES.USER.NEWAD} component={NewAd} />
      <PrivateRoute path={GC.ROUTES.USER.FAVORITES} component={FavoritesPage} />
      <PrivateRoute path={GC.ROUTES.USER.EDITAD} component={EditAd} />
      <AdminRoute path={GC.ROUTES.ADMIN.BRANDS} component={BrandsAdminPage} />
      <AdminRoute path={GC.ROUTES.ADMIN.MODELS} component={ModelsAdminPage} />
      <AdminRoute path={GC.ROUTES.ADMIN.OPTIONS} component={OptionsAdminPage} />
      <AdminRoute path={GC.ROUTES.ADMIN.PANEL} component={AdminPanel} />
    </Switch>
  );
};

export default AppRouter;
