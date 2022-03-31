import React from 'react'
import { Container, Row, Col, Form, Button, Image} from 'react-bootstrap';
import logoDumbMerch from "../asset/logoDumbMerch.png";
import './Login.css';

const Login = () => {
  return (
    <Container fluid className="container-fluid">
      <Row>
        <Col lg={7}>
          <section className="section-login-register">
            <Image
              className="logo-login-register"
              src={logoDumbMerch}
              responsive
            />
            <h1 className="mt-4">Easy, Fast and Reliable</h1>
            <p>
              Go shopping for merchandise, just go to dumb merch <br />
              shopping. the biggest merchandise in <strong>Indonesia</strong>
            </p>
            <div>
              <a href="#" className="a-login">
                Login
              </a>
              <a href="#" className="a-register">
                Register
              </a>
            </div>
          </section>
        </Col>

        <Col lg={5}>
          <Form className="form-login-register p-4">
            <h3 className="mt-3 mb-4">Login</h3>
            <Form.Group className="mt-4 mb-3" controlId="formBasicEmail">
              <Form.Control
                className="form-control"
                size="md"
                type="email"
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control
                className="form-control"
                size="md"
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button size="md" type="submit" className="mt-4 btn-submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;