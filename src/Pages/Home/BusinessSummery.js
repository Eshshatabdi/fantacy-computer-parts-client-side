import React from 'react';
import { BsFillAlarmFill } from 'react-icons/bs'
import { FaCheckDouble } from 'react-icons/fa'
import { BsFillStarFill } from 'react-icons/bs'


const BusinessSummery = () => {
    return (
        <div>
            <div className="mt-5 text-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">

                <div className='card bg-base-200 shadow-lg'>
                    <h3 className='flex justify-center'><BsFillAlarmFill /></h3>
                    <h3 > 24/7</h3>
                    <p style={{ color: '#1400c6', fontSize: 'bold' }}
                        className="text-uppercase font-bold  ">Dedicated Support Team</p>
                </div>
                <div className="card bg-base-200 shadow-lg">
                    <h3 className='flex justify-center'><FaCheckDouble /></h3>

                    <h3>10000+</h3>
                    <p style={{ color: '#1400c6', fontSize: 'bold' }} className="text-uppercase font-bold">Client Satisfaction</p>
                </div>
                <div className="card bg-base-200 shadow-lg">
                    <h3 className='flex justify-center'><BsFillStarFill /></h3>
                    <h3>33k+</h3>
                    <p style={{ color: '#1400c6', fontSize: 'bold' }} className="text-uppercase font-bold">Reviews</p>
                </div>
            </div>



        </div>
    );
};

export default BusinessSummery;