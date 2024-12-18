import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { verifyAuth } from '../services/auth.js';

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    useEffect(() => {
        const checkAuth = async () => {
            const authenticated = await verifyAuth();
            setIsAuthenticated(authenticated);
        };

        checkAuth();
    }, []);

    if (isAuthenticated === null) {
        return <div>Loading...</div>
    }
    return isAuthenticated ? children : <Navigate to="/login" />; // Redirige si no está autenticado
};

export default ProtectedRoute;
