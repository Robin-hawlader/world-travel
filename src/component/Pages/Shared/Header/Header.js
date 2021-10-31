import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Context/UseAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='d-flex justify-content-center align-items-center'><span className='fs-2 me-3'></span> Travel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto link-decorate">
                            <Link to="/home">Home</Link>
                            <Link to="/mycart">MyCart</Link>
                            <Link to="/booking">All Booking</Link>
                            <Link to="/addServices">Add New</Link>
                            {
                                user.email ? <Button variant='danger' onClick={logOut} className='ms-2'>Logout</Button>
                                    :
                                    <Link to='/login'>Login</Link>
                            }

                        </Nav>
                        <Navbar.Text className='ms-3'>
                            Signed in as: <Link to='login' className='text-decoration-none'><span>{user.displayName}</span></Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;