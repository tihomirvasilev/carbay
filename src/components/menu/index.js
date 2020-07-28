import React from "react";

import { NavDropdown } from "react-bootstrap";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

import styles from "./index.module.css";

const Menu = () => {
  return (
    <NavDropdown
      title={<BsFillGrid3X3GapFill className={styles["icon-item"]} />}
    >
      <NavDropdown.Item href="/login">Login</NavDropdown.Item>
      <NavDropdown.Item href="/register">Register</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
      <NavDropdown.Item href="/favorites">My Notebook</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
    </NavDropdown>
  );
};

export default Menu;
