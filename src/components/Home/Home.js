import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import resume1 from '../../assets/img/resume1.jpg';
import resume2 from '../../assets/img/resume2.jpg';
import resume3 from '../../assets/img/resume3.jpg';
import currentresume from '../../assets/img/resume3.jpg';

function Home() {
  return (
    <>
      <Header />

      <div className="p-md-5 pt-5 p-3 bg-primary min-vh-50 text-center align-items-center d-flex">
        <Container>
          <Row>
            <Col>
              <Stack gap={3} className="py-5">
                <h1 class="display-3 fw-bold text-white">Free <span className="text-gradiant">Resume Builder</span> - Generate your resume online.</h1>
                <p class="fs-4 text-white">Build beautiful, recruiter-tested resumes in a few clicks! Our resume builder is powerful and easy to use, with a range of amazing functions.</p>
                <div>
                  <Button variant="light" size="lg" as={Link} to="/create" className="py-3">Create Resume Now</Button>
                </div>
              </Stack>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="bg-white rounded-top p-md-5 p-3 mt-n5 shadow">
        <Row>
          <Col>

            <Container>
              <Row className="align-items-center justify-content-center mb-5">
                <Col md="auto"><Image src={currentresume} width={200} /></Col>
                <Col md={6} className="ps-md-5">
                  <h3>Start from where you stopped?</h3>
                  <p>Resume Builder is lightning fast. There's no software to download. No multi-part sign-up form. No long-winded tutorials. Just a straightforward process.</p>
                  <Button variant="primary" as={Link} to="/create">Continue editing</Button> {' '}
                  <Button variant="outline-primary" as={Link} to="/preview">Download</Button>
                </Col>
              </Row>
            </Container>
            <hr />

            <Row className="justify-content-center pt-3 mb-3">
              <Col md={8}>

                <h2 className="text-center">Resume Templates for Every Career Path.</h2>
                <p className="text-center">You can pick one of our handcrafted resume templates above. You can start building your resume in less than 5 seconds, using predefined sections approved by recruiters worldwide. You can also customize it to your own needs and personality and hit 'Download'. It's THAT easy to use, even if you've never made a resume in your life before!</p>
              </Col>
            </Row>
            <Container>
              <Row>
                <Col md={4}>

                  <Card className="mb-3">
                    <Card.Img variant="top" src={resume1} />
                    <Card.Body>
                      <Card.Title>Creative Resume Template</Card.Title>
                      <Card.Text>
                        A resume template as creative as your imagination
                      </Card.Text>
                      <Button variant="primary">Select</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>


                  <Card className="mb-3">
                    <Card.Img variant="top" src={resume2} />
                    <Card.Body>
                      <Card.Title>Professional Resume template</Card.Title>
                      <Card.Text>
                        Put your best foot forward with a professional resume template
                      </Card.Text>
                      <Button variant="primary">Select</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>

                  <Card className="mb-3">
                    <Card.Img variant="top" src={resume3} />
                    <Card.Body>
                      <Card.Title>College Resume Template</Card.Title>
                      <Card.Text>
                        No experience? No problem!
                      </Card.Text>
                      <Button variant="primary">Select</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>


          </Col>
        </Row>
      </Container>




      <Footer />

    </>
  )
}

export default Home