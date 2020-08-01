import React, { useContext } from "react";

import { Nav, NavDropdown } from "react-bootstrap";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { firebaseAuth } from "../../utils/auth-provider";
import styles from "./index.module.css";

const Menu = () => {
  const { handleSignOut } = useContext(firebaseAuth);

  return (
    <Nav>
      <NavDropdown
        title={
          <BsFillPersonLinesFill
            title={"Menu"}
            className={styles["icon-item"]}
          />
        }
      >
        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
        <NavDropdown.Item href="/register">Register</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/profile">Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={handleSignOut} href="/">
          Logout
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default Menu;
