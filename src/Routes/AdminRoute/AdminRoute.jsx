import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../Hooks/UseAdmin/useAdmin';
import { AuthContext } from '../../Provider/AuthProvider';


const AdminRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();

    if (loading, isAdminLoading) {
        return <progress className="progress progress-secondary w-56" value="0" max="100"></progress>
    }
    if (user, isAdmin) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default AdminRoute;