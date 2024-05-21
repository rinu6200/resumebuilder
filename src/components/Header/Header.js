import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Logo from '../../assets/img/logo-white.svg';
import { Link, useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Header() {
  
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/"><Image src={Logo} width={40} /> <span className='text-uppercase fw-bold'>Resume Builder</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className={splitLocation[1] === "" ? "active" : ""}>Home</Nav.Link>
            <div className="vr" />
            <Nav.Link href="/login">Log In</Nav.Link>
            <Button variant="light" as={Link} to="/signup">Sign Up</Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;