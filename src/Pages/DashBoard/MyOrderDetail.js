import React from 'react';

const MyOrderDetail = ({ order, index }) => {
    const { itemName } = order
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{itemName}</td>
            <td></td>
        </tr>
    );
};

export default MyOrderDetail;