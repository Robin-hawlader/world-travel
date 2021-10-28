import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-dark footer'>
            <Container>
                <Row md={3}>
                    <Col sm={12} className='text-light'>
                        <div>
                            <h2> A good hospital Objective</h2>
                            <p>The best hospitals always prioritize the patient’s comfort and convenience at each stage of their journey. A good hospital should focus on making the patient’s experience as seamless as possible, right from appointment booking to discharge.</p>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <nav className='link-decorate text-light'>
                            <h3>Main Links</h3>
                            <Link to="/home"> Home</Link> <br />
                            <Link to="/service"> Service</Link> <br />
                            <Link to="/doctor"> Doctors</Link><br />
                            <Link to="/about"> About us</Link><br />
                            <Link to="/login"> Login</Link>

                        </nav>

                    </Col>
                    <Col sm={12} className='text-light'>
                        <div className='opening'>
                            <h3>Opening Hours</h3>
                            <p> 24/7 hours Open <br /><span className='text-danger'><b>Friday Open</b></span></p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Footer;