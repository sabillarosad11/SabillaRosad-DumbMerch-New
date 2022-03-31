import React from 'react'
import { Container, Image, Navbar, Nav, Table } from "react-bootstrap";
import "./style/Category.css";
import logoNavbar from "../asset/logoNavbar.png";
import DataCategory from '../Dummy Data/ListCategory';

const Category = () => {
  return (
    <>
      <Navbar className="bg-navbar" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <Image className="logo-navbar" src={logoNavbar} responsive />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className="nav-link" href="#">
              Complain
            </Nav.Link>
            <Nav.Link className="nav-link active" href="#">
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

      <Container className="container-list-category px-4 py-4">
        <h5>List Category</h5>
        <Table striped hover variant="dark">
          <thead>
            <tr>
              <th>No</th>
              <th>Category Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCategory.map((ListCategory, index) => (
              <tr key={index}>
                <td className="col-4">{ListCategory.id}</td>
                <td className="col-4">{ListCategory.product}</td>
                <td className="col-3">
                  <a href="#" className="a-edit">
                    Edit
                  </a>
                  <a href="#" className="a-delete">
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Category;