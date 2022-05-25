import React from 'react';
import shipping from '../../images/shipping1.jpg.crdownload'

const Shipping = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={shipping} className="sm:max-w-sm lg:w-3/4 rounded-lg shadow-2xl " alt='' />
                <div>
                    <h1 className="text-5xl  text-primary font-bold">Product Shipping</h1>
                    <p className="py-6 text-4xl">We Shipping Product WorldWide.</p>
                    <p className='text-xl'>We care about your Orderd product...Its our first priority</p>

                </div>
            </div>
        </div>
    );
};

export default Shipping;