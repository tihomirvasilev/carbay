import React from "react";

import AdminPanelNav from "../../components/admin-nav";
import Title from "../../components/title";
import Layout from "../../components/layout";

const AdminLayout = ({ children }) => {
  return (
    <Layout>
      <Title title={"Admin Panel"} />
      <AdminPanelNav>{children}</AdminPanelNav>
    </Layout>
  );
};

export default AdminLayout;
