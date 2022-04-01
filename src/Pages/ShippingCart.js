import React from 'react'
import { Container, Image, Navbar, Nav, Table, Row, Form, Col } from "react-bootstrap";
import "./style/ShippingCart.css";
import logoNavbar from "../asset/logoNavbar.png";
import mouse from "../asset/mouse.jpg";

const ShippingCart = () => {
  return (
    <div>
      <Navbar className="bg-navbar" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <Image className="logo-navbar" src={logoNavbar} responsive />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className="nav-link" href="#">
              Complain
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
              Category
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
              Product
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="product-buy">
        <a href="#" className="btn-home">
          Home /
        </a>
        <a href="#" className="btn-cart">
          Cart
        </a>

        <Table className="table table-borderless">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="col-4">
                <Image className="img-list-transaction me-3" src={mouse} />
              </td>
              <td className="col-4">Mouse</td>
              <td className="col-4">Rp. 500.000</td>
              <td className="col-3">
                <a href="#" className="btn-remove">
                  Remove
                </a>
              </td>
            </tr>
            <tr>
              <td className="col-4">
                <Image className="img-list-transaction me-3" src={mouse} />
              </td>
              <td className="col-4">Mouse</td>
              <td className="col-4">Rp. 500.000</td>
              <td className="col-3">
                <a href="#" className="btn-remove">
                  Remove
                </a>
              </td>
            </tr>
            <tr>
              <td className="col-4">
                <Image className="img-list-transaction me-3" src={mouse} />
              </td>
              <td className="col-4">Mouse</td>
              <td className="col-4">Rp. 500.000</td>
              <td className="col-3">
                <a href="#" className="btn-remove">
                  Remove
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>

      <Container className="main-address">
        <h6>Shipping Details</h6>
        <Row>
          <Col lg={6}>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Address 1</Form.Label>
                <Form.Control
                  className="form-shipping"
                  size="sm"
                  type="text"
                  value="Jl Haji Mandor Salim"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={6}>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Address 2</Form.Label>
                <Form.Control
                  className="form-shipping"
                  size="sm"
                  type="text"
                  value="RT4 RW2 Srengseng"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Province</Form.Label>
                <Form.Control
                  className="form-shipping"
                  size="sm"
                  type="text"
                  value="DKI Jakarta"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>City</Form.Label>
                <Form.Control
                  className="form-shipping"
                  size="sm"
                  type="text"
                  value="West Jakarta"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={4}>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  className="form-shipping"
                  size="sm"
                  type="text"
                  value="11630"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Country</Form.Label>
                <Form.Control
                  className="form-shipping"
                  size="sm"
                  type="text"
                  value="Indonesia"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={6}>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  className="form-shipping"
                  size="sm"
                  type="text"
                  value="+62 888 777 333"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>

      <Container className="payment">
        <h6>Payment Information</h6>
        <Row>
          <Col lg={2}>
            <h6>Rp 2.500</h6>
            <p>Country Tax</p>
          </Col>
          <Col lg={2}>
            <h6>Rp 2.000</h6>
            <p>Product Insurance</p>
          </Col>
          <Col lg={2}>
            <h6>Rp 10.500</h6>
            <p>Ship to Jakarta</p>
          </Col>
          <Col lg={2}>
            <h6 className="active">Rp 1.524.000</h6>
            <p>Total</p>
          </Col>
          <Col>
            <a href="#" className="btn-checkout">
              Checkout
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ShippingCart