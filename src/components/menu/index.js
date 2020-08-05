import React, { useContext } from "react";
import { firebaseContext } from "../../firebase/auth-provider";
import { Nav, NavDropdown } from "react-bootstrap";
import { BsFillPersonLinesFill } from "react-icons/bs";

import styles from "./index.module.css";

const Menu = () => {
  const { handleLogout } = useContext(firebaseContext);
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
        <NavDropdown.Item onClick={handleLogout} href="/">
          Logout
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default Menu;
