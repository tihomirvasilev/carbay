import React, { useContext } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { BsFillPersonLinesFill } from "react-icons/bs";

import GC from "../../constants";
import { FirebaseContext } from "../../firebase";

import styles from "./index.module.css";

const Menu = () => {
  const { firebase } = useContext(FirebaseContext);
  const currentUser = JSON.parse(localStorage.getItem("authUser"));

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
              Нова Обява
            </NavDropdown.Item>
            <NavDropdown.Item href={GC.ROUTES.USER.MYADS}>
              Моите Обяви
            </NavDropdown.Item>
            <NavDropdown.Item href={GC.ROUTES.USER.FAVORITES}>
              Бележник
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => firebase.logout()} href="/">
              Излизане
            </NavDropdown.Item>
          </>
        )}
        {!currentUser && (
          <>
            <NavDropdown.Item href={GC.ROUTES.USER.LOGIN}>
              Влизане
            </NavDropdown.Item>
            <NavDropdown.Item href={GC.ROUTES.USER.REGISTER}>
              Регистрация
            </NavDropdown.Item>
          </>
        )}
      </NavDropdown>
    </Nav>
  );
};

export default Menu;
