import React from "react";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import {
  BsBookmarksFill,
  BsFillGrid3X3GapFill,
  BsChevronExpand,
  BsSearch,
} from "react-icons/bs";

import styles from "./index.module.css";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={styles.navbar}
      variant="dark"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-between text-center"
      >
        <Nav>
          <NavDropdown title={<BsFillGrid3X3GapFill />}>
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
        <Nav>
          <Nav.Link href="/notebook">
            <BsBookmarksFill className={styles["icon-left"]} />
            Notebook
          </Nav.Link>
        </Nav>
        <Navbar.Brand href="/">CarBuy</Navbar.Brand>
        <Nav>
          <Nav.Link href="/sort">
            <BsChevronExpand className={styles["icon-left"]} />
            Sort
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/search">
            <BsSearch className={styles["icon-left"]} />
            Search
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
