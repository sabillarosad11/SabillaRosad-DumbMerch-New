import React from 'react'
import NavbarMerch from "../Component/Navbar";
import { Container, Row, Col, Card} from "react-bootstrap";
import "./style/Homepage.css";
import mouse from "../asset/mouse.jpg";
import keyboard from "../asset/keyboard.jpg";

const Homepage = () => {
  return (
    <>
      <NavbarMerch />
      <Container className="container-main">
        <h6>Product</h6>
        <Row>
          <Col lg={2}>
            <Card className="card">
              <Card.Img variant="top" src={mouse} />
              <Card.Body className="card-body">
                <Card.Title className="card-tittle">Mouse</Card.Title>
                <Card.Text className="card-text">
                  <p>
                    Rp.500.000 <br />
                    Stock : 600
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={2} className="colom-product">
            <Card className="card">
              <Card.Img variant="top" src={keyboard} />
              <Card.Body className="card-body">
                <Card.Title className="card-tittle">Keyboard</Card.Title>
                <Card.Text className="card-text">
                  <p>
                    Rp.700.000 <br />
                    Stock : 600
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Homepage;