import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Loading from '../SharedPage/Loading';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';


const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch(' https://limitless-spire-51674.herokuapp.com/service').then(res => res.json()))

    const imageStorageKey = '86570ec4198722e73cbd93b9c7980685';


    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const quantity = 1000;
                    const availableQuantity = 10000
                    const product = {
                        name: data.name,
                        price: data.price,
                        description: data.description,
                        quantity: quantity,
                        availableQuantity: availableQuantity,

                        img: img
                    }


                    // send to your database 
                    fetch(' https://limitless-spire-51674.herokuapp.com/service', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',

                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('product added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the product');
                            }
                        })

                }

            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (

        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-success text-2xl font-bold">Add Product</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input
                                type="text"
                                placeholder="Your Name"
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
                                <span className="label-text">price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="price"
                                className="input input-bordered w-full max-w-xs"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'price is Required'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
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
                            {/* <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Min Order quantity 1000"
                                className="input input-bordered w-full max-w-xs"
                                {...register("quantity"
                                )}
                            /> */}
                            {/* <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Available Quantity"
                                className="input input-bordered w-full max-w-xs"
                                {...register("availableQuantity"
                                )}
                            /> */}
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input
                                type="file"
                                placeholder="imageURL"
                                className="input input-bordered w-full max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                })}
                            />

                        </div>
                        <input className='btn btn-success w-full max-w-xs text-white' type="submit" value="Add a product" />
                    </form>

                </div>
            </div>
        </div>


    );
};

export default AddProduct;