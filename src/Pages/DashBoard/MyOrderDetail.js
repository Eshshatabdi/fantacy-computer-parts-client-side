import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderDetail = ({ order, index }) => {
    const { _id, itemName, price } = order
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{itemName}</td>
            <td>{(price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-success'>pay</button></Link>}
                {(price && order.paid) && <span className='btn btn-xs btn-success'>paid</span>}
            </td>



            <td><button class='btn btn-xs btn-error'>Delete</button></td>
        </tr>
    );
};

export default MyOrderDetail;