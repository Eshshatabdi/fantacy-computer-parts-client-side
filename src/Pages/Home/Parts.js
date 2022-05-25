import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='my-12'>
            <h2 className="text-center text-4xl text-primary font-bold">
                Our Products

            </h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    parts.reverse().slice(0, 3).map(part => <Part
                        key={part._id}
                        part={part}>
                    </Part>)

                }
            </div>

        </div>
    );
};

export default Parts;