import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FormControl, InputGroup, Col, Row } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#76C3EB' }} className=' p-1 align-items-center'>
        <Row>
          <Col>
            <InputGroup className="ms-auto w-50">
              <FormControl
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
              />
              <Button style={{ fontSize: '0.8rem', fontWeight: '700' }} className='ms-2 mt-1' variant="outline-dark" id="button-addon1">
                Search
              </Button>
            </InputGroup>
          </Col>
          <Col className='text-end me-3 my-auto'>
            <span className='ms-2 fw-bold'>Contact</span>
            <span className='ms-2 fw-bold'>Sign in</span>
          </Col>
        </Row>
      </div>
      <Navbar collapseOnSelect sticky='top' expand="lg" bg="light" variant="light">
        <Container className='d-flex justify-content-evenly'>
          <Navbar.Brand className='fw-bold' href="#home"><span className='text-success'>Sage</span> Intacct</Navbar.Brand>
          <Navbar.Toggle className='ms-auto' aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#Products">Products</Nav.Link>
              <Nav.Link href="#Industries">Industries</Nav.Link>
              <Nav.Link href="#Services">Services</Nav.Link>
              <Nav.Link href="#Partners">Partners</Nav.Link>
              <Nav.Link href="#Resources">Resources</Nav.Link>
              <Nav.Link href="#Company">Company</Nav.Link>
              <Button className='p-2 mx-auto bg-success w-25 border-0'>Get pricing</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;