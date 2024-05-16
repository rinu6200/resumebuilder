import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Wizard from "../Wizard/wizard";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Create() {

  return (
    <>
      <Header />

      <div className="p-5 bg-primary">
        <Container>
          <Row>
            <Col>
              <div className="p-md-5 p-3">
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="bg-white rounded-top mt-n5 shadow">
        <Row>
          <Col className="p-0">
            <Wizard />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Create
