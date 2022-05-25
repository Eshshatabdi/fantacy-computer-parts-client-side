import React from 'react';

const OrderDetail = ({ order }) => {
    const { itemName, email, quantity, phone, address } = order
    return (
        <div class="card lg:max-w-lg  bg-base-100 shadow-xl">

            <div class="card-body items-center text-center">
                <h2 class="card-title">{itemName}</h2>

                <p>{quantity}</p>
                <p>quantity:{quantity}</p>
                <p>phone:{phone}</p>
                <p>address:{address}</p>


            </div>
        </div>
    );
};

export default OrderDetail;