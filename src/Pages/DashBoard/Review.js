import React, { useEffect, useState } from 'react';
import ReviewDetail from './ReviewDetail';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-12'>
            <h2 className="text-center text-4xl text-primary font-bold">
                Reviews

            </h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    reviews.map(review => <ReviewDetail
                        key={review._id}
                        review={review}>
                    </ReviewDetail>)

                }
            </div>

        </div>
    );
};

export default Review;