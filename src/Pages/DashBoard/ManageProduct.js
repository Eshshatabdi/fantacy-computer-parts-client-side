import React from 'react';
import useParts from '../../hooks/useParts';
import ManagePart from './ManagePart';

const ManageProduct = () => {
    const [parts] = useParts();
    return (
        <div className='my-12'>
            <h2 className="text-center text-4xl text-primary font-bold">
                Our Products

            </h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    parts.map(part => <ManagePart
                        key={part._id}
                        part={part}>
                    </ManagePart>)

                }
            </div>

        </div>
    );
};

export default ManageProduct;