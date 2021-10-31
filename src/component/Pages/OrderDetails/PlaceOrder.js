import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../Context/UseAuth';
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import { Link } from 'react-router-dom';

const Details = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const { img, view, location, placeName, transpot, cost } = product;
    useEffect(() => {
        fetch(`http://localhost:5000/travels/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const { register, reset, handleSubmit, } = useForm();
    const onSubmit = data => {
        data.selectItem = product;
        console.log(data)
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Your booking seccesfully')
                    reset()
                }
            })
    };
    return (
        <div>
            <div className='my-5'>
                <Container>
                    <Row md={2} sm={1}>
                        <Col>
                            <h3 className='text-center my-4'><span className='border-bottom border-4 border-danger'>Your Selected Cart</span></h3>
                            <Card style={{ width: '18rem' }} className='mx-auto'>
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title>{placeName}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Location: {location}</ListGroupItem>
                                    <ListGroupItem>View: {view}</ListGroupItem>
                                    <ListGroupItem>Transport: {transpot}</ListGroupItem>
                                    <ListGroupItem>Package Cost: {cost}</ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <Link to='/home'>Go Home</Link>
                                    <Link className='ms-3' to='/mycart'>My Cart</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <div className='my-5'>
                                <form onSubmit={handleSubmit(onSubmit)} className='text-center '>
                                    <h3 className='text-center my-4'><span className='border-bottom border-4 border-danger'>Check Your Details</span></h3>
                                    <input className='w-100' type='name' defaultValue={user.displayName}  {...register("name", { required: true, maxLength: 20 })} /> <br />

                                    <input className='w-100 my-3' type='email' defaultValue={user?.email}{...register("email")} /> <br />

                                    <input className='w-100' type='adress' {...register("address")} placeholder='Adress' required /> <br />

                                    <input className='w-100 my-3' type="number" {...register("mobile")} placeholder='Mobile' required /> <br />

                                    <input className='w-100 btn btn-danger' type="submit" />
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Details;