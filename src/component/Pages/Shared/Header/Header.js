import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='d-flex justify-content-center align-items-center'><span className='fs-2 me-3'></span> Travel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto link-decorate">
                            <Link to="/home">Home</Link>
                            <Link to="/destination">Destination</Link>
                            <Link to="/special">Special</Link>
                            <Link to="/about">About</Link>
                            <Link to='/login'>Login</Link>

                        </Nav>
                        <Navbar.Text className='ms-3'>
                            Signed in as: <Link to='login' className='text-decoration-none'></Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;