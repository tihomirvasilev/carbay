import React from "react";

import { Nav, NavDropdown } from "react-bootstrap";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

import styles from "./index.module.css";

const Menu = () => {
  return (
    <Nav>
      <NavDropdown
        title={<BsFillGrid3X3GapFill className={styles["icon-item"]} />}
      >
        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
        <NavDropdown.Item href="/register">Register</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/create-ad">New Ad</NavDropdown.Item>
        <NavDropdown.Item href="/my-ads">My Ads</NavDropdown.Item>
        <NavDropdown.Item href="/notebook">My Notebook</NavDropdown.Item>
        <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default Menu;
