import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AddNewPost from '../AddNewPost/AddNewPost';
import Banner from '../Banner/Banner';
import HappyClient from '../Client/HappyClient';
import Footer from '../Shared/Footer/Footer';
import TravelPlace from '../TravelPlace/TravelPlace';

const Home = () => {
    const [places, setPlaces] = useState([]);
    const [newPost, setNewPost] = useState([])
    useEffect(() => {
        fetch('https://haunted-goblin-46133.herokuapp.com/travels')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    useEffect(() => {
        fetch('https://haunted-goblin-46133.herokuapp.com/addBookings')
            .then(res => res.json())
            .then(data => setNewPost(data))
    }, [])

    return (
        <div>
            <Banner></Banner>
            <div className="m-5 my-5">
                <h1 className='text-center my-5'><span className='border-bottom border-4 border-danger'>Our special travel place in the world</span></h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        places.map(place => <TravelPlace key={place._id} placeItem={place}></TravelPlace>)

                    }
                </div>
            </div>

            <div className="m-5 my-5">
                <h1 className='text-center my-5'><span className='border-bottom border-4 border-danger'>Added New Post</span></h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        newPost.map(post => <AddNewPost key={post._id} post={post}></AddNewPost>)
                    }
                </div>
                <HappyClient></HappyClient>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;