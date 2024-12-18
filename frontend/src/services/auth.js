import axios from 'axios';

export const verifyAuth = async () => {
    try {
        const response = await axios.get('http://localhost:3000/protected', { withCredentials: true });

        if (response.status === 200) {
            return true; // Usuario autenticado
        }
    } catch (error) {
        console.error('Error verificando autenticación:', error.message);
    }
    return false; // Usuario no autenticado o error
};
