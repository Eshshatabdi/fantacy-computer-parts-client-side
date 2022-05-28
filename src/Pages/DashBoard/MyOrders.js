import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import DeleteOrder from './DeleteOrder';
import MyOrderDetail from './MyOrderDetail';

const MyOrders = () => {
    const [order] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    const [deletingOrder, setDeletingOrder] = useState(null);
    useEffect(() => {
        const email = order?.email;
        fetch(` https://limitless-spire-51674.herokuapp.com/orders?email=${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [order, orders, deletingOrder])


    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-compact w-full">

                    <thead>
                        <tr>
                            <th>no</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>payment</th>



                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <MyOrderDetail key={order._id}
                                index={index}

                                order={order}
                                setDeletingOrder={setDeletingOrder}

                            ></MyOrderDetail>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingOrder && <DeleteOrder


                    deletingOrder={deletingOrder}

                    setDeletingOrder={setDeletingOrder}


                >
                </DeleteOrder>
            }

        </div>
    );
};

export default MyOrders;