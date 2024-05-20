import React from "react";
import { Link } from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../../assets/img/logo.svg';
import LoginBg from '../../assets/img/loginbg.jpg';
import Image from 'react-bootstrap/Image';



function Login() {
  return (
    <>
      <Container>
        <Row className="vh-100  align-items-center justify-content-md-center">
          <Col xs lg="8">

            <Row className="bg-white rounded-4 shadow-lg">
              <Col xs="12" md="6" className="p-md-5 p-3">
                <div className="py-4">

                  <h4 className="text-uppercase fw-bold mb-5"><Image src={Logo} width={40} /> Resume Builder</h4>

                  <h2 className="fw-bolder fs-1">Login to your account</h2>
                  <p className="text-muted mb-5">Hi, Welcome back &#128075; </p>
                  <Form>
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
                      <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>

                    <div className="d-grid mb-3">
                      <Button variant="primary" as={Link} to="/home-logged" className="p-3">Sign in</Button>
                    </div>
                    <Form.Group className="text-center text-muted">
                      Don't have an account? <Link to="/signup" >Create an account</Link>
                    </Form.Group>
                  </Form>
                </div>
              </Col>
              <Col xs="12" lg="6" className="p-3 d-none d-sm-block">
                <Image src={LoginBg} className="rounded-3 object-fit-cover h-100" fluid />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Login