
import React from 'react';
import banner1 from '../../images/banner1.jpg'

const Banner = () => {
    return (
        <div style={{
            height: '400px', width: '100%',
            background: `url(${banner1})`

        }}
        >
            <div className='flex-1 p-5 '>
                <h3 className='text-xl text-primary font-bold mt-5 '>Manufacturer</h3>

                <p className='text-white pb-5 font-bold w-1/3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita.</p>

            </div>

        </div>
    );
};

export default Banner;