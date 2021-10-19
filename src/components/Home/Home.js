import React from 'react';
import Banner from '../Banner/Banner';
import Shop from '../Shop/Shop';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Shop></Shop>
            <Banner></Banner>
        </div>
    );
};

export default Home;