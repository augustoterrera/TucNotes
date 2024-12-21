import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { verifyAuth } from '../services/auth.js';

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const authenticated = await verifyAuth();
                setIsAuthenticated(authenticated);
            }
            catch (error) {
                console.error('Error al verificar autenticación:', error);
                setIsAuthenticated(false);
            }
        }
        checkAuth();
    }, []);

    if (isAuthenticated === null) {
        return <div>Loading...</div>
    }
    return isAuthenticated ? children : <Navigate to="/login"/>; // Redirige si no está autenticado
};

export default ProtectedRoute;
