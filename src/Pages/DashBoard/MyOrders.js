import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyOrderDetail from './MyOrderDetail';

const MyOrders = () => {
    const [order] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const email = order.email;
        fetch(`http://localhost:5000/orders?email=${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [order])


    return (
        <div>

            <div class="overflow-x-auto">
                <table class="table table-compact w-full">

                    <thead>
                        <tr>
                            <th>no</th>
                            <th>email</th>
                            <th>orders</th>
                            <th>delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <MyOrderDetail key={order._id}
                                index={index}

                                order={order}

                            ></MyOrderDetail>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;