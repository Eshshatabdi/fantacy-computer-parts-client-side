import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {


    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {


        const getData = {
            name: data.name,
            rating: data.rating,
            description: data.description,
            image: data.image
        }


        const url = ` https://limitless-spire-51674.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(getData)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('review added successfully');

                }
                else {
                    toast.error('Failed to add the review');
                }
            })


    }

    return (

        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-success text-2xl font-bold">Add review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'name is Required'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>

                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input
                                type="number"
                                min='1'
                                max='5'
                                placeholder="Rating"
                                className="input input-bordered w-full max-w-xs"
                                {...register("rating", {
                                    required: {
                                        value: true,
                                        message: 'rating is Required'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.ratin.message}</span>}
                            </label>
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Description"
                                className="input input-bordered w-full max-w-xs"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'description is Required'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            </label>


                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input
                                type="text"
                                placeholder="imageURL"
                                className="input input-bordered w-full max-w-xs"
                                {...register("image"
                                )}
                            />

                        </div>
                        <input className='btn btn-success w-full max-w-xs text-white' type="Add Review" value="Add a Review" />
                    </form>

                </div>
            </div>
        </div>

    );
};

export default AddReview;