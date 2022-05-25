import React from 'react';

const ReviewDetail = ({ review }) => {
    const { name, rating, description, image } = review
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">

                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{name}</h4>
                        <p>{description}</p>
                        <p>Ratings:{rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetail;