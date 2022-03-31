import React from "react";
import { Container, Image, Navbar, Nav, Table } from "react-bootstrap";
import "./style/Product.css";
import logoNavbar from "../asset/logoNavbar.png";
import DataProduct from "../Dummy Data/DataProduct";

const Product = () => {
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
            <Nav.Link className="nav-link" href="#">
              Category
            </Nav.Link>
            <Nav.Link className="nav-link active" href="#">
              Product
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="container-list-product">
        <h5>List Product</h5>
        <Table className="table-product" striped hover variant="dark">
          <thead>
            <tr>
              <th className="col-1">No</th>
              <th className="col-1 ">Photo</th>
              <th className="col-2">Product Name</th>
              <th className="col-3">Product Desc</th>
              <th className="col-1"> Price</th>
              <th className="col-1">Qty</th>
              <th className="col-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataProduct.map((DataProduct, index) => (
              <tr key={index}>
                <td>{DataProduct.id}</td>
                <td>
                  <a href="#">
                    {DataProduct.photo}
                  </a>
                </td>
                <td>{DataProduct.productName}</td>
                <td>{DataProduct.ProductDesc}</td>
                <td>{DataProduct.price}</td>
                <td>{DataProduct.qty}</td>
                <td>
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
};

export default Product;
