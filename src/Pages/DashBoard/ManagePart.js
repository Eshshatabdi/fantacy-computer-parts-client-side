import React from 'react';
import useParts from '../../hooks/useParts';

const ManagePart = ({ part }) => {
    const { _id, name, price, img, quantity, availableQuantity, description } = part
    const [parts, setParts] = useParts()

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;

            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log(data);
                        const remaining = parts.filter(part => part._id !== id);
                        setParts(remaining);

                    }



                })

        }
    }


    return (
        <div className="card lg:max-w-lg  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 h-3/6">
                <img className='bg-base-200 rounded-xl' src={img} alt="" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price:${price}/per unit</p>
                <p>{description}</p>
                <p>Minimun Order Quantity:{quantity}</p>
                <p>Available Quantity:{availableQuantity}</p>
                <div className="card-actions">
                    <button onClick={() => handleDelete(part._id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManagePart;