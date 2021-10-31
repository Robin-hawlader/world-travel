import React from 'react';
import './AddNewPost.css'

const AddNewPost = (props) => {
    const { img, name, description, price } = props.post;
    return (
        <div>
            <div className="col h-100">
                <div className="card single-cart">
                    <img className='img-resize' src={img} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Place: {name}</h5>
                        <p className='scroll'>{description}</p>
                        <p>Price: <b>${price}</b></p>
                    </div>
                    {/* <Button onClick={() => placeOrderhandle(_id)} className="text-light">Booking Now</Button> */}
                </div>
            </div>
        </div>
    );
};

export default AddNewPost;