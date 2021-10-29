
import React from 'react';
import { Button } from 'react-bootstrap';
import './TravelPlace.css';

const TravelPlace = (props) => {
    const { img, location, view, transpot, placeName, cost } = props.placeItem;
    return (
        <div>
            <div className="col h-100">
                <div className="card single-cart">
                    <img className='img-resize' src={img} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Place: {placeName}</h5>
                        <p>Location: {location}</p>
                        <p>Transportation: {transpot}</p>
                        <p>View: {view}</p>
                        <p>Cost: $ {cost}</p>
                    </div>
                    <Button className="text-light">Booking Now</Button>
                    {/* <button className="btn btn-dark text-light">Booking Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default TravelPlace;