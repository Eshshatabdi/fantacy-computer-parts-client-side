
import React from 'react';
import banner1 from '../../images/banner1.jpg'

const Banner = () => {
    return (
        <div style={{
            height: '400px', width: '100%',
            background: `url(${banner1})`

        }}
        >
            <div className='flex-1 p-12 '>
                <h3 className='text-xl text-white font-bold mt-5 '>Fantacy Computer Parts Manufacturer </h3>

                <p className='text-white pb-5 font-bold w-1/3'>Reliability and customer satisfaction is our first priority</p>

            </div>

        </div>
    );
};

export default Banner;