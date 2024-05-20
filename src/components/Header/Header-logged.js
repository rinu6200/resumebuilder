import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Logo from '../../assets/img/logo-white.svg';
import Dropdown from 'react-bootstrap/Dropdown';

function HeaderLogged() {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/"><Image src={Logo} width={40} /> <span className='text-uppercase fw-bold'>Resume Builder</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/home-logged">Home</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <div className="vr" />
            <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
      <i class="bi bi-person"></i> <span>Rinu Madathil</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/preview"><i class="bi bi-eye me-3"></i> View Resume</Dropdown.Item>
            <Dropdown.Divider />
        <Dropdown.Item href="/login"><i class="bi bi-box-arrow-right me-3"></i> Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderLogged;