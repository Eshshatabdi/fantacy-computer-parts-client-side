import React from 'react';

const MyOrderDetail = ({ order, index }) => {
    const { email } = order
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td></td>
        </tr>
    );
};

export default MyOrderDetail;