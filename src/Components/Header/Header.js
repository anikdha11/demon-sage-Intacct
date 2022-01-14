import React from 'react';
import { Button, Container,Nav, Navbar} from 'react-bootstrap';

const Header = () => {
    return (
        <div>
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