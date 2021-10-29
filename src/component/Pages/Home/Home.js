import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import TravelPlace from '../TravelPlace/TravelPlace';

const Home = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/travels')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    return (
        <div>
            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        places.map(place => <TravelPlace key={place._id} placeItem={place}></TravelPlace>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;