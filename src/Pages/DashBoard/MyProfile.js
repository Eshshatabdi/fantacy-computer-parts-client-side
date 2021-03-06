import React, { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';


const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [updateProfil, setUpdateProfile] = useState('')


    const handleAdd = event => {
        event.preventDefault();
        const profile = {
            email: user.email,
            userName: user.displayName,
            phone: event.target.phone.value,
            education: event.target.education.value,
            location: event.target.location.value,
            linkedinprofile: event.target.linkedinprofile.value
        }
        fetch(' https://limitless-spire-51674.herokuapp.com/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {


                toast(`profile is added`)


            })
        event.target.reset();




        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(` https://limitless-spire-51674.herokuapp.com/profile/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {

                    setUpdateProfile(data)

                })
        }


    }

    return (
        <div>


            <form onSubmit={handleAdd} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                <h2 className="text-xl text-success">Profile</h2>

                <input type="text" name="name" value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                <input type="email" name="email" value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                <input type="text" name="education" placeholder='Education' className="input input-bordered w-full max-w-xs" />
                <input type="text" name="location" placeholder='location' className="input input-bordered w-full max-w-xs" />
                <input type="number" name="phone" placeholder='phone no' className="input input-bordered w-full max-w-xs" />


                <input type="text" name="linkedinprofile" placeholder="linkedin " className="input input-bordered w-full max-w-xs" />


                <input type="submit" value="Add profile" className="btn btn-secondary w-full max-w-xs" />
            </form>
        </div>






    );
};

export default MyProfile;