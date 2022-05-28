import React, { useEffect, useState } from 'react';
import useParts from '../../hooks/useParts';
import Part from './Part';

const Parts = () => {
    const [parts] = useParts()

    return (
        <div className='mt-12'>
            <h2 className="text-center text-4xl text-primary font-bold">
                Our Products

            </h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    [...parts].reverse().slice(0, 3).map(part => <Part
                        key={part._id}
                        part={part}>
                    </Part>)

                }
            </div>

        </div>
    );
};

export default Parts;