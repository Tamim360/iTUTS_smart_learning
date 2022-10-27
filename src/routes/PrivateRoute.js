import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { Player } from "@lottiefiles/react-lottie-player";


const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext)
    const location = useLocation()
    if (isLoading) {
        return (
            <Player
                autoplay
                loop
                src="https://assets5.lottiefiles.com/packages/lf20_a2chheio.json"
                style={{ height: "300px", width: "300px" }}
            >
            </Player>
        )
    }
    if(user && user.uid) return children
    return <Navigate to="/login" state={{from: location}} replace />;
};

export default PrivateRoute;