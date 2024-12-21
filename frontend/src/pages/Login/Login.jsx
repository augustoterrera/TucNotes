import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [form, setForm] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', {
                username: form.username,
                password: form.password,
            }, {
                withCredentials: true // Esto asegura que las cookies se envíen
            });

            if (response.status === 200) {
                
                    navigate('/inicio')
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;