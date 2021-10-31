import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import ManageCard from './ManageCard';

const ManageAllService = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://haunted-goblin-46133.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setCart(data))
    }, []);

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
            <h1 className='text-center my-5'><span className='border-bottom border-4 border-danger'>Client Booking This Place.</span></h1>
            <Row xs={1} md={3} className="g-4 container mx-auto my-5">
                {
                    cart.map(result => <ManageCard key={result._id}
                        allbooking={result}
                        handleDelete={handleDelete}
                    ></ManageCard>)
                }
            </Row>
            <Footer></Footer>
        </div >
    );
};

export default ManageAllService;