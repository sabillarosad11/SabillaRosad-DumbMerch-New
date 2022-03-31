import React from 'react'
import { Container, Image, Navbar, Nav, Row, Col, Form} from "react-bootstrap";
import "./style/complain.css";
import logoNavbar from "../asset/logoNavbar.png";
import admin from "../asset/admin.png";
import userChat from "../asset/userChat.png";
import chatAdmin from "../asset/chatAdmin.png";

const complain = () => {
  return (
    <>
      <Navbar className="bg-navbar" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <Image className="logo-navbar" src={logoNavbar} responsive />
          </Navbar.Brand>
          <div class="vertical-line"></div>
          <Nav className="ms-auto">
            <Nav.Link className="nav-link active" href="#">
              Complain
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
              Profil
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col lg={5} className="colom-left">
            <div className="d-flex flex-row message-left">
              <Image className="img-admin" src={admin} />
              <div>
                <p className="admin">Admin</p>
                <p className="chat-admin">Yes, Is there anything I can help</p>
              </div>
            </div>
          </Col>
          <Col lg={7} className="colom-left">
            <Image className="img-chat-user" src={userChat} />
            <Image className="img-chat-admin" src={admin} />
            <Image className="img-replay-admin" src={chatAdmin} />
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  className="mb-3"
                  type="text"
                  placeholder="Send Message"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default complain;