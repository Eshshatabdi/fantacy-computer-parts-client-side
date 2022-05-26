import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderModel from './OrderModel';

const Purchase = () => {
    const { id } = useParams()
    const [purchase, setPurchase] = useState({});
    const [item, setItem] = useState(null);
    const [update, setUpdate] = useState([])


    useEffect(() => {
        const url = (` https://limitless-spire-51674.herokuapp.com/service/${id}`)
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [purchase, update])









    return (
        <div className="card lg:max-w-96 mt-12 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={purchase.img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{purchase.name}</h2>
                <p>Price:${purchase.price}/per unit</p>
                <p>{purchase.description}</p>
                <p>Minimun Order Quantity:{purchase.quantity}</p>
                <p>Available Quantity:{purchase.availableQuantity}</p>
                <div className="card-actions">
                    {/* <button className="btn btn-primary">place order</button> */}
                    <label htmlhtmlFor="order-modal" onClick={() => setItem(purchase._id)} className="btn btn-primary">place order</label>
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