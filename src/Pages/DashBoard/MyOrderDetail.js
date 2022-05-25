import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderDetail = ({ order, index }) => {
    const { itemName, price } = order
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{itemName}</td>
            <td>{(price && !order.paid) && <Link to={``}><button className='btn btn-success'>pay</button></Link>}</td>
            <td><button class='btn btn-xs btn-error'>Delete</button></td>
        </tr>
    );
};

export default MyOrderDetail;