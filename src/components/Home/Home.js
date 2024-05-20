import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function Home() {
  return (
    <>
      <Header />

      <div className="p-md-5 pt-5 p-3 bg-primary min-vh-100 text-center align-items-center d-flex">
        <Container>
          <Row>
            <Col>
              <Stack gap={3} className="py-5">
                <h1 class="display-3 fw-bold text-white">Free <span className="text-gradiant">Resume Builder</span> - Generate your resume online.</h1>
                <p class="fs-4 text-white">Build beautiful, recruiter-tested resumes in a few clicks! Our resume builder is powerful and easy to use, with a range of amazing functions.</p>
                <div>
                  <Button variant="light" size="lg" as={Link} to="/login" className="py-3 px-5 me-3">Log in</Button> {' '}
                  <Button variant="outline-light" size="lg" as={Link} to="/signup" className="py-3 px-5">Create Acount</Button>
                </div>
              </Stack>
            </Col>
          </Row>
        </Container>
      </div>




      <Footer />

    </>
  )
}

export default Home