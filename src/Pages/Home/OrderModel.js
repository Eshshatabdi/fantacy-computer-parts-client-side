import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const OrderModel = ({ item, setItem, purchase }) => {

    const [update, setUpDate] = useState(1000)


    const { name } = purchase;
    const [user] = useAuthState(auth)
    const quantity = purchase.quantity * 1
    const availableQuantity = purchase.availableQuantity * 1
    const price = purchase.price



    const handleBooking = event => {
        event.preventDefault();





        const itemName = name


        const inputQuantity = event.target.inputQuantity.value
        const email = user.email
        const userName = user.displayName
        const phone = event.target.phone.value
        const address = event.target.address.value
        const order = { itemName, inputQuantity, email, userName, phone, price, address }

        if (inputQuantity < quantity || inputQuantity > availableQuantity) {
            toast.error(`cannot order less then ${quantity} and greater than ${availableQuantity}`)

        }
        else {
            fetch('http://localhost:5000/order', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {


                    toast(`Booking is set`)
                    setItem(null);

                })
            event.target.reset();

        }



    }

    return (
        <div>
            <input type="checkbox" id="order-modal" class="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                        <input type="text" name="name" value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="inputQuantity" placeholder='minimum order 1000 pc' className="input input-bordered w-full max-w-xs" />


                        <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="Order" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>




        </div>
    );
};

export default OrderModel;