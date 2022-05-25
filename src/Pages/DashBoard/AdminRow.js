import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({ user, refetch, index }) => {
    const { email, role } = user

    const makeAdmins = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }



                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`successfully made an admin`)
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== "admin" && <button onClick={makeAdmins} class="btn btn-xs btn-primary">Make Admin</button>}</td>
            {/* <td><button class="btn btn-xs">Remove User</button></td> */}
        </tr>
    );
};

export default AdminRow;