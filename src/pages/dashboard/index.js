import React from "react";

import DashboardLayout from "../../components/dashboard-layout";
import Dashboard from "../../components/dashboard";
import Title from "../../components/title";
import BackButton from "../../components/back-button";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  );
};

export default DashboardPage;
