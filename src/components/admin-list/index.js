import React from "react";
import { Table } from "react-bootstrap";
import DeleteButton from "../../components/delete-button";
import styles from "./index.module.css";
const AdminList = ({ items, collection }) => {
  return (
    <Table className={styles.table} striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            {item.name && <td>{item.name}</td>}
            {!item.name && <td>{item}</td>}
            <td>
              <DeleteButton
                id={item.id}
                collection={collection}
                path={"/admin/" + collection}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AdminList;
