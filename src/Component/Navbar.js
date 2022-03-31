import React from 'react'
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import "./Navbar.css";
import logoNavbar from "../asset/logoNavbar.png";

const NavbarMerch = () => {
  return (
    <Navbar className="bg-navbar" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <Image className="logo-navbar" src={logoNavbar} responsive />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link className="nav-link" href="#home">
            Complain
          </Nav.Link>
          <Nav.Link className="nav-link" href="#features">
            Profile
          </Nav.Link>
          <Nav.Link className="nav-link"  href="#pricing">
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarMerch;