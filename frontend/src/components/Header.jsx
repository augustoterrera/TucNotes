import React from 'react'
import { Link } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> |
                <Link to="/login">Login</Link>|
                <ProtectedRoute>
                    <Link to="/inicio">Inicio</Link>
                </ProtectedRoute>
            </nav>
        </div>
    )
}

export default Header
