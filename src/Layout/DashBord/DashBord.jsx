import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaHamburger, FaUserMinus } from 'react-icons/fa';
import useCart from '../../Hooks/useCart/useCart';

const DashBoard = () => {
    const [cart] = useCart()
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-black">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to="/dashBoard/home"><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to="/dashBoard/reservation"><FaCalendarAlt ></FaCalendarAlt>Reservations</NavLink></li>
                    <li><NavLink to="/dashBoard/history"><FaWallet ></FaWallet>Payment History</NavLink></li>
                    <li><NavLink to='/dashBoard/myCart'><FaShoppingCart></FaShoppingCart>My Cart    <div className="badge badge-secondary">+{cart?.length || 0}</div></NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/menu"><FaUserMinus></FaUserMinus> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><FaHamburger></FaHamburger> Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;