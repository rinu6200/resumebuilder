import React from "react";
import { Link } from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../../assets/img/logo.svg';
import SignupBg from '../../assets/img/signup.jpg';
import Image from 'react-bootstrap/Image';


function Signup() {
  return (
    <>
      <Container>
        <Row className="vh-100  align-items-center justify-content-md-center">
          <Col xs lg="8">

            <Row className="bg-white rounded-4 shadow-lg">

              <Col xs="12" lg="6" className="p-3 d-none d-sm-block">
                <Image src={SignupBg} className="rounded-3 object-fit-cover h-100" fluid />
              </Col>
              <Col xs="12" md="6" className="p-md-5 p-3">
                <div className="">

                  <h4 className="text-uppercase fw-bold mb-3"><Image src={Logo} width={40} /> Resume Builder</h4>

                  <h2 className="fw-bolder fs-1">Get Started</h2>
                  <p className="text-muted mb-3">Already have an account?  <Link to="/login" >Sign in</Link></p>
                  <Form>
                    <Form.Group className="mb-3" controlId="">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="First Name"
                        className="mb-3"
                      >
                        <Form.Control type="text" placeholder="John" />
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Last Name"
                        className="mb-3"
                      >
                        <Form.Control type="text" placeholder="Doe" />
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                      >
                        <Form.Control type="email" placeholder="name@example.com" />
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                      <FloatingLabel controlId="" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                      <FloatingLabel controlId="" label="Confirm Password">
                        <Form.Control type="password" placeholder="Confirm Password" />
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                      <FloatingLabel controlId="" label="Phone Number">
                        <Form.Control type="tel" placeholder="" />
                      </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="">
                      <FloatingLabel controlId="" label="Designation">
                        <Form.Select aria-label="">
                          <option>--Select your designation--</option>
                          <option value="1">HR</option>
                          <option value="2">Designer</option>
                          <option value="3">Developer</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Form.Group>

                    <div className="d-grid mb-3">
                      <Button variant="primary" as={Link} to="/login" className="p-3">Sign up</Button>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </Col>
        </Row >
      </Container >

    </>
  )
}

export default Signup