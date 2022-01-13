import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory } from "react-router";
const NavBar = () => {
  const history = useHistory();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <img
          src="appicon.svg"
          alt="name"
          style={{ width: "50px", marginRight: "20px" }}
        />
        <button className="btn btn-light" onClick={() => history.push("/")}>
          <Navbar.Brand>E-Commerce</Navbar.Brand>
        </button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="text-end basic-navbar-nav">
          <Nav className="text-end">
            <button
              className="text-end btn btn-light"
              onClick={() => history.push("/SignUp")}
            >
              <Nav.Link className="text-end fs-5">SignUP/Login</Nav.Link>
            </button>
            <button
              className="text-end btn btn-light"
              onClick={() => history.push("/Users")}
            >
              <Nav.Link className="text-end fs-5">CRUD OPERATIONS</Nav.Link>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
