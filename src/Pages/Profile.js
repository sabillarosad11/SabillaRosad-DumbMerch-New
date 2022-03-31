import React from 'react'
import NavbarMerch from "../Component/Navbar";
import { Container, Row, Col, Image} from "react-bootstrap";
import "./style/Profile.css";
import Avatar from "../asset/Avatar.jpg";
import mouse from "../asset/mouse.jpg";
import logoNavbar from "../asset/logoNavbar.png";

const Profile = () => {
  return (
    <>
      <NavbarMerch />
      <Container className="container-profile">
        <Row>
          <Col lg={3}>
            <h6 className="tittle-profile">My Profile</h6>
            <Image className="image-profile" src={Avatar} />
          </Col>

          <Col lg={4}>
            <div className="text-identity">
              <p>
                <span>Name</span> <br /> Yosep
              </p>
              <p>
                <span>Email</span> <br /> yosepgans@gmail.com
              </p>
              <p>
                <span>Phone</span> <br /> 083896833122
              </p>
              <p>
                <span>Gender</span> <br /> Male
              </p>
              <p>
                <span>Address</span> <br /> Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's
              </p>
            </div>
          </Col>

          <Col lg={5}>
            <h6 className="tittle-profile">My Transaction</h6>
            <div className="list-transaction">
              <Row>
                <div className="d-flex flex-row ">
                  <Image className="img-list-transaction me-3" src={mouse} />
                  <div>
                    <h8>Mouse</h8>
                    <p className="text-list-transaction">
                      <strong>Saturday</strong>, 14 Juli 2021
                    </p>
                    <p className="text-list-transaction-price">
                      Price : Rp.500.000
                    </p>
                    <p className="text-transaction-price">
                      Sub Total : 500.000
                    </p>
                  </div>
                  <Image
                    className="img-list-transaction-logo ms-auto"
                    src={logoNavbar}
                  />
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;