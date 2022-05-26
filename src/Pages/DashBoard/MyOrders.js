import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyOrderDetail from './MyOrderDetail';

const MyOrders = () => {
    const [order] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const email = order.email;
        fetch(` https://limitless-spire-51674.herokuapp.com/orders?email=${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [order])


    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-compact w-full">

                    <thead>
                        <tr>
                            <th>no</th>
                            <th>Name</th>
                            <th>payment</th>
                            <th>Action</th>

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