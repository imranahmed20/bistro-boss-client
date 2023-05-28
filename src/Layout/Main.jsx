import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';
import NavBer from '../Share/NavBer/NavBer';

const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signUp')
    return (
        <div>
            {noHeaderFooter || <NavBer></NavBer>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;

