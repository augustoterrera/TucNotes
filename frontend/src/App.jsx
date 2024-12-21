import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio/Inicio';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Header from './components/Header.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

function App() {
    return (
        <AuthProvider>
            <h1>Mi aplicación</h1>
            <Header />
            <Routes>
                {/* Rutas públicas */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />

                {/* Rutas protegidas */}
                <Route
                    path="/inicio"
                    element={
                        <ProtectedRoute>
                            <Inicio />
                        </ProtectedRoute>
                    }
                />

                {/* Ruta para 404 */}
                <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
            </Routes>
        </AuthProvider>
    );
}

export default App;
