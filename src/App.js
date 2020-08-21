import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import AuthProvider from "./utils/auth";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <React.Suspense fallback={<h1>Loading....</h1>}>
            <AppRoutes />
          </React.Suspense>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
