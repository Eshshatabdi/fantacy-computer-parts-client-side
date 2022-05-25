import React from 'react';
import employ from '../../images/chobi1.jpg'

const Employ = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={employ} className="sm:max-w-sm lg:w-3/4 rounded-lg shadow-2xl " alt='' />
                <div>
                    <h1 className="text-5xl  text-primary font-bold">About Security</h1>
                    <p className="py-6  text-4xl ">Our company is 24 ours under CCTV servulience </p>
                    <p className='text-xl'>Our employe always check everything</p>

                </div>
            </div>
        </div>
    );
};

export default Employ;