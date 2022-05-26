import React from 'react';

const Blogs = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-success">1.How will you improve the performance of a react application?</h2>
                    <p>ans:There are several below ways we can improve React performance.
                        A.  Using React-window or react- virtualized other than too many DOM.
                        B. By changing layout.
                        C. Updating state on fast user interactions such as scroll events, drag events, mouse over events also help to boost performance.
                        D. Passing new objects to child components on render cycle.
                        E. Finally,  we can minimizing the numbers of caching requests and many other way we can efficiently improve React performance. </p>



                </div>
            </div>
        </div>
    );
};

export default Blogs;