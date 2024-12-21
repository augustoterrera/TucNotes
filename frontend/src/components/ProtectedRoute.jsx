import React, { useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }
    return isAuthenticated ? children : null;
};

export default ProtectedRoute;