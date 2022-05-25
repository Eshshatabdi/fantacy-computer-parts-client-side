import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const DashBoard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">

            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl text-center font-bold text-purple-500'>Welcome to DashBoard</h2>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-blue-200 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {admin || <>
                        <li><Link to='/dashboard/addreview'>Add a Reviews</Link></li>
                        <li><Link to='/dashboard/myorder'>My Order</Link></li>

                    </>}



                    {admin && <>
                        <li> <Link to='/dashboard/makeadmin'>Make Admin</Link></li>
                        <li><Link to='/dashboard/addproduct'>Add a product</Link></li>
                        <li><Link to='/dashboard/manageorder'>Manage all Orders</Link></li>
                        <li><Link to='/dashboard/manageproduct'>Manage Products</Link></li>






                    </>}
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;