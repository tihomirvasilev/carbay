import React from "react";
import { Jumbotron } from "react-bootstrap";

import AdminLayout from "../../components/admin-layout";

const AdminPage = () => {
  return (
    <AdminLayout>
      <Jumbotron>Hello, Administrator!</Jumbotron>
    </AdminLayout>
  );
};

export default AdminPage;
