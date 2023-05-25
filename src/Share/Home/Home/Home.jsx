import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Popular from '../Popular/Popular';
import Featured from './Featured/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Popular></Popular>
            <Featured></Featured>
        </div>
    );
};

export default Home;