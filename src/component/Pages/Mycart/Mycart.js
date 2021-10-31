import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../Context/UseAuth';
import Footer from '../Shared/Footer/Footer';

const Mycart = () => {
    const [cart, setCart] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://haunted-goblin-46133.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])

    const userInfo = cart.filter(info => info.email === user.email)


    const handleDelete = id => {
        const url = `https://haunted-goblin-46133.herokuapp.com/booking/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    window.confirm('Are you sure you want to delete your selected item?')

                    const remaining = cart.filter(service => service._id !== id);
                    setCart(remaining);

                }

            })


    }
    return (
        <div>
            <h1 className='text-center my-5'><span className='border-bottom border-4 border-danger'>Your Seleceted All Place</span></h1>
            <Row xs={1} md={3} className="g-4 container mx-auto my-5">
                {
                    userInfo.map(result => <div key={result._id}>

                        <Col>
                            <Card>
                                <Card.Img variant="top" className='img-resize' src={result.selectItem.img} />
                                <Card.Body>
                                    <Card.Title>{result.selectItem.placeName}</Card.Title>
                                    <p><small>Location:</small> {result.selectItem.location}</p>
                                    <p><small>View:</small> {result.selectItem.view}</p>
                                    <Card.Text>
                                        {result.selectItem.details}
                                    </Card.Text>
                                </Card.Body>
                                <Button onClick={() => handleDelete(result._id)} variant='danger'>Remove from your cart</Button>
                            </Card>
                        </Col>
                    </div>)
                }
            </Row>
            <Footer></Footer>
        </div >
    );
};

export default Mycart;