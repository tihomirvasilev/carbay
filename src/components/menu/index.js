import React, { useContext } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FirebaseContext } from "../../firebase";
import styles from "./index.module.css";

const Menu = () => {
  const { firebase, user } = useContext(FirebaseContext);

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
        {user && (
          <>
            <NavDropdown.Item href="/new-ad">New Add</NavDropdown.Item>
            <NavDropdown.Item href="/my-ads">My Ads</NavDropdown.Item>
            <NavDropdown.Item href="/favorites">Favorites</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => firebase.logout()} href="/">
              Logout
            </NavDropdown.Item>
          </>
        )}
        {!user && (
          <>
            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            <NavDropdown.Item href="/register">Register</NavDropdown.Item>
          </>
        )}
      </NavDropdown>
    </Nav>
  );
};

export default Menu;
