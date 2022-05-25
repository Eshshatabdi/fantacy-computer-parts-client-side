import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderModel from './OrderModel';

const Purchase = () => {
    const { id } = useParams()
    const [purchase, setPurchase] = useState({});
    const [item, setItem] = useState(null);
    const [update, setUpdate] = useState([])


    useEffect(() => {
        const url = (`http://localhost:5000/service/${id}`)
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [purchase, update])








    // const handledecreaseQuantity = () => {

    //     const newQuantity = (parseInt(purchase.quantity) - 1);
    //     const updateQuantity = { newQuantity }
    //     const url = `http://localhost:5000/service/${id}`
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'

    //         },
    //         body: JSON.stringify(updateQuantity)

    //     })
    //         .then(res => res.json())
    //         .then(data => {

    //             setUpdate(data)
    //             alert('quantity updated')
    //         })

    //     if (newQuantity === 0) {

    //         // return toast('sold out')
    //     }


    // }
    return (
        <div class="card lg:max-w-96 mt-12 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={purchase.img} alt="" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{purchase.name}</h2>
                <p>Price:${purchase.price}/per unit</p>
                <p>{purchase.description}</p>
                <p>Minimun Order Quantity:{purchase.quantity}</p>
                <p>Available Quantity:{purchase.availableQuantity}</p>
                <div class="card-actions">
                    {/* <button class="btn btn-primary">place order</button> */}
                    <label htmlFor="order-modal" onClick={() => setItem(purchase._id)} class="btn btn-primary">place order</label>
                </div>





            </div>
            {
                item && <OrderModel

                    item={item}
                    setItem={setItem}
                    purchase={purchase}
                ></OrderModel>
            }
        </div >
    );
};

export default Purchase;