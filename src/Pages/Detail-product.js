import React from 'react'
import NavbarMerch from "../Component/Navbar";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./style/Detail-product.css";
import DetailMouse from '../asset/DetailMouse.jpg'

const DetailProduct = () => {
  return (
    <>
      <NavbarMerch />
      <Container className="container-lg">
        <Row>
          <Col lg={6}>
            <Image
              className="img-detail-product"
              src={DetailMouse}
              responsive
            />
          </Col>

          <Col lg={4}>
            <h2 class="text-detail">Mouse</h2>
            <p className="text-stock">Stock : 600</p>
            <p className="text-spesification">
              - Wireless Mouse <br />
              - Konektivitas wireless 2.4 GHz <br />
              - Jarak wireless hingga 10 m <br />
              - Plug and Play <br />
              - Baterai tahan hingga 12 bulan Mouse <br />
              <br />
              Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang
              ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio
              2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik
              pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh
              1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem
              operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru
              dan sistem operasi Chrome OS.
            </p>
            <h5 className="text-price">Rp.300.900</h5>
            <Button className="btn-detail">Buy</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DetailProduct;