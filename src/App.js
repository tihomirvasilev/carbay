import React from "react";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/spinner";
import Layout from "./components/layout";
import AuthProvider from "./utils/auth";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <React.Suspense fallback={<Loader />}>
            <AppRoutes />
          </React.Suspense>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
