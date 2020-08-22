import React from "react";
import { Table } from "react-bootstrap";

const AdminList = ({ items }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr>
            <td>{index + 1}</td>
            {item.name && <td>{item.name}</td>}
            {!item.name && <td>{item}</td>}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AdminList;
