import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';
import NavBer from '../Share/NavBer/NavBer';

const Main = () => {
    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;