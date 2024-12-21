import React, { createContext, useState, useEffect } from 'react';
import { verifyAuth } from '../services/auth.js';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const authenticated = await verifyAuth();
                setIsAuthenticated(authenticated);
            } catch (error) {
                console.error('Error al verificar autenticación:', error);
                setIsAuthenticated(false);
            }
        };
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};