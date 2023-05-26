import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from './Cover/Cover';
import menuImg from '../../../src/assets/menu/banner3.jpg'
import Popular from '../../Share/Home/Popular/Popular';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"> </Cover>
            <Popular></Popular>

        </div>
    );
};

export default Menu;