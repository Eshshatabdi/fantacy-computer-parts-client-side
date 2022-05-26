import React, { useEffect, useState } from 'react';
import OrderDetail from './OrderDetail';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(' https://limitless-spire-51674.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className='my-12'>
            <h2 className="text-center text-4xl text-primary font-bold">
                All Orders

            </h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    orders.map(order => <OrderDetail
                        key={order._id}
                        order={order}>
                    </OrderDetail>)

                }
            </div>

        </div>
    );
};

export default ManageOrders;