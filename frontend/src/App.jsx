import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Inicio from './pages/Inicio/Inicio'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import ProtectedRoute from './components/ProtectedRoute.jsx'

function App() {

  return (
    <>
      <h1>Mi aplicacion</h1>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/inicio' element=
        {
          <ProtectedRoute>
            <Inicio/>
          </ProtectedRoute>
        } />
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </>
  )
}

export default App
