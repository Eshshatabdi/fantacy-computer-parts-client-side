import React from 'react';

const BusinessSummery = () => {
    return (
        <div>
            <div className="mt-5 text-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">

                <div className='card bg-base-200 shadow-lg'>
                    <h3>24/7</h3>
                    <p style={{ color: '#1400c6', fontSize: 'bold' }}
                        class="text-uppercase font-bold  ">Dedicated Support Team</p>
                </div>
                <div className="card bg-base-200 shadow-lg">
                    <h3>10000+</h3>
                    <p style={{ color: '#1400c6', fontSize: 'bold' }} class="text-uppercase font-bold">Client Satisfaction</p>
                </div>
                <div className="card bg-base-200 shadow-lg">
                    <h3>33k+</h3>
                    <p style={{ color: '#1400c6', fontSize: 'bold' }} class="text-uppercase font-bold">Reviews</p>
                </div>
            </div>


        </div>
    );
};

export default BusinessSummery;