import React from 'react';

const ManagePart = ({ part }) => {
    const { _id, name, price, img, quantity, availableQuantity, description } = part

    return (
        <div className="card lg:max-w-lg  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 h-3/6">
                <img className='bg-base-200' src={img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price:${price}/per unit</p>
                <p>{description}</p>
                <p>Minimun Order Quantity:{quantity}</p>
                <p>Available Quantity:{availableQuantity}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManagePart;