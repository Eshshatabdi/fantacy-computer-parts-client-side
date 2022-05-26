import React from 'react';
import found from '../../images/found img.avif'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-xl text-primary'>404</h2>
            <h2 className='text-xl text-primary'>Page is not Found</h2>
            <img src={found} alt="" />

        </div>
    );
};

export default NotFound;