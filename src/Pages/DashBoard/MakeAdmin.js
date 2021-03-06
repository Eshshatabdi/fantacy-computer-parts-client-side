import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedPage/Loading';
import AdminRow from './AdminRow';


const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(' https://limitless-spire-51674.herokuapp.com/user', {
        method: 'Get',
        // headers: {
        //     authorization: `Bearer ${localStorage.getItem('accessToken')}`

        // }

    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-compact w-full">

                    <thead>
                        <tr>
                            <th>no</th>
                            <th>email</th>
                            <th>admin</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <AdminRow key={user._id}

                                index={index}

                                user={user}
                                refetch={refetch}
                            ></AdminRow>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MakeAdmin;