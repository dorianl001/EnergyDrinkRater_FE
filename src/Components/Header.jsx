import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

function Header(props) {
    return (
        <div className="Header">
            <Navbar bg='dark' expand="lg" variant='dark'>
                <Navbar.Brand href="#home">
                    <img
                        alt="logo"
                        src="/logo.png"
                        width="300"
                    />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse />
                <Nav className="mr-auto">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/About">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Ratebev">Rate Drinks</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
}

export default Header;