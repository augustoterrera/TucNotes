import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';



const Login = () => {
    const [form, setForm] = useState({
        username: "",
        password: "",
    })
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', {
                username: form.username,
                password: form.password,
            },
                {
                    withCredentials: true // Esto asegura que las cookies se envíen
                });

            if (response.status === 200) {
                alert("Login exitoso");
                navigate('/inicio')
            } else {
                alert("Error en el login: " + response.data.message);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            alert("Error interno del servidor.");
        }
    };
    return (
        <div>
            <h1>Pagina de Login</h1>
            <TextField id="outlined-basic" name="username" label="Usuario" variant="outlined" value={form.username} onChange={handleChange} />
            <TextField id="outlined-basic" name="password" label="Contraseña" variant="outlined" value={form.password} onChange={handleChange} />
            <Button variant="outlined" onClick={handleSubmit}>Iniciar Sesion</Button>
        </div>
    )
}

export default Login
