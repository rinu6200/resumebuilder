import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Resume from "../Resume/Resume";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Preview() {
  return (
    <>
      <Header />

      <div className="p-5 bg-primary">
        <Container>
          <Row className="align-items-center">
            <Col>
              <div className="py-5">
                <h3 className="text-white"><i class="bi bi-journal-check"></i> Preview your resume</h3>
              </div>
            </Col>
            <Col md="auto">
              <Button variant="outline-light">Print / Download</Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="bg-white rounded-top p-md-5 p-3 mt-n5 shadow">
        <Row>
          <Col>
            <Resume />

            <div className="text-center pt-4">
              <Button variant="primary">Print / Download</Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  )
}

export default Preview
