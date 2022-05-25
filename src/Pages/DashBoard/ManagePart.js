import React from 'react';

const ManagePart = ({ part }) => {
    const { _id, name, price, img, quantity, availableQuantity, description } = part

    return (
        <div class="card lg:max-w-lg  bg-base-100 shadow-xl">
            <figure class="px-10 pt-10 h-3/6">
                <img className='bg-base-200' src={img} alt="" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>Price:${price}/per unit</p>
                <p>{description}</p>
                <p>Minimun Order Quantity:{quantity}</p>
                <p>Available Quantity:{availableQuantity}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManagePart;