import React from 'react';
import notFound from '../../../images/not-found/not-found-page.jpg';

const NotFound = () => {
    return (
        <div className='text-center my-5'>
            <img className='img-fluid' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;