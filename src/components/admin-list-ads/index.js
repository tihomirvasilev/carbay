import React from "react";
import { Table } from "react-bootstrap";
import DeleteButton from "../../components/delete-button";

const AdminListAds = ({ items, collection }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Марка</th>
          <th>Модел</th>
          <th>Категория</th>
          <th>Град</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.brand}</td>
            <td>{item.model}</td>
            <td>{item.category}</td>
            <td>{item.city}</td>
            <td>
              <DeleteButton
                id={item.id}
                collection={collection}
                to={"/admin/" + collection}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AdminListAds;
