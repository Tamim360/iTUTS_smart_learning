import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    console.log(children);
    const { user, isLoading } = useContext(AuthContext)
    const location = useLocation()
    if(isLoading) return <p>Loading...</p>
    if(user && user.uid) return children
    return <Navigate to="/login" state={{from: location}} replace />;
};

export default PrivateRoute;