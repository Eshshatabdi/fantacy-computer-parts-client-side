import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyOrderDetail = ({ order, index, setDeletingOrder }) => {
    const { _id, itemName, price, email } = order



    return (
        <tr>
            <th>{index + 1}</th>
            <td>{itemName}</td>
            <td>{(price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-success'>pay</button></Link>}
                {(price && order.paid) && <div>
                    <p><span className='text-success'>Paid</span></p>
                    <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                </div>}
                {(price && order.paid) ||





                    <label onClick={() => setDeletingOrder(order)} htmlFor='delete-confirm-modal' className='btn btn-xs btn-error'>Delete</label>}

            </td>




        </tr>
    );
};

export default MyOrderDetail;