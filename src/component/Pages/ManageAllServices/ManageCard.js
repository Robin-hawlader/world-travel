import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const ManageCard = (props) => {
    const { selectItem } = props.allbooking;
    const { allbooking } = props;
    const { handleDelete } = props;
    const { details, cost, placeName, img } = selectItem;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" className='img-resize' src={img} />
                    <Card.Body>
                        <Card.Title className='text-primary'>{placeName}</Card.Title>
                        <Card.Text className='text-secondary'>
                            {details}
                        </Card.Text>
                        <Card.Text>
                            <p><small><i>Booked by:</i></small>  <b>{allbooking.name}</b></p>
                            <small>email: <i>{allbooking.email}</i></small>
                            <p className='mt-3'><span className='bg-info  p-2 rounded'>Package: ${cost}</span></p>
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={() => handleDelete(allbooking._id)} variant='danger'>Remove from your cart</Button>
                </Card>
            </Col>
        </div>
    );
};

export default ManageCard;