import React from 'react';
import Review from '../DashBoard/Review';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Employ from './Employ';
import Parts from './Parts';
import Shipping from './Shipping';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummery></BusinessSummery>
            <Parts></Parts>
            <Shipping></Shipping>
            <Employ></Employ>
            <Review></Review>


        </div>
    );
};

export default Home;