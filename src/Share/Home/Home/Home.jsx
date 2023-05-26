import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Popular from '../Popular/Popular';
import Featured from './Featured/Featured';
import Reviews from './Reviews/Reviews';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Popular></Popular>
            <Featured></Featured>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;