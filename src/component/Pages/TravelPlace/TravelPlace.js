
import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './TravelPlace.css';

const TravelPlace = (props) => {
    const { img, placeName, details, _id } = props.placeItem;

    const history = useHistory();

    const placeOrderhandle = id => {
        const url = `/placeOrder/${id}`;
        history.push(url);
    }
    return (
        <div>
            <div className="col h-100">
                <div className="card single-cart">
                    <img className='img-resize' src={img} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Place: {placeName}</h5>
                        <p>{details}</p>
                    </div>
                    <Button onClick={() => placeOrderhandle(_id)} className="text-light">Booking Now</Button>
                </div>
            </div>
        </div>
    );
};

export default TravelPlace;