import React, { useContext } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { BsFillPersonLinesFill } from "react-icons/bs";

import GC from "../../constants";
import { FirebaseContext } from "../../firebase";

import styles from "./index.module.css";

const Menu = () => {
  const { firebase, currentUser } = useContext(FirebaseContext);
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
        {currentUser && (
          <>
            <NavDropdown.Item href={GC.ROUTES.USER.NEWAD}>
              New Add
            </NavDropdown.Item>
            <NavDropdown.Item href={GC.ROUTES.USER.MYADS}>
              My Ads
            </NavDropdown.Item>
            <NavDropdown.Item href={GC.ROUTES.USER.FAVORITES}>
              Favorites
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => firebase.logout()} href="/">
              Logout
            </NavDropdown.Item>
          </>
        )}
        {!currentUser && (
          <>
            <NavDropdown.Item href={GC.ROUTES.USER.LOGIN}>
              Login
            </NavDropdown.Item>
            <NavDropdown.Item href={GC.ROUTES.USER.REGISTER}>
              Register
            </NavDropdown.Item>
          </>
        )}
      </NavDropdown>
    </Nav>
  );
};

export default Menu;
