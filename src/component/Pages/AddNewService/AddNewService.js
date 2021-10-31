import axios from 'axios';
import React from 'react';
import './AddNewService.css'
import { useForm } from "react-hook-form";
import Footer from '../Shared/Footer/Footer';

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://haunted-goblin-46133.herokuapp.com/addBookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully')
                    reset()
                }
            })
    }
    return (
        <div className="add-service">
            <h1 className='text-center my-5'><span className='border-bottom border-4 border-danger'>Add New Travel Places.</span></h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' required />
                <textarea {...register("description")} placeholder='Description' required />
                <input type="number" {...register("price")} placeholder='Price' required />
                <input {...register("img")} placeholder='image url' required />
                <input className='btn btn-danger' type="submit" />
            </form>
            <Footer></Footer>
        </div>
    );
};

export default AddNewService;