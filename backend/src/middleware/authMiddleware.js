import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    const token = req.cookies.access_token; // Obtener el token desde las cookies
    const secreto = process.env.SECRET_KEY;

    if (!token) {
        return res.status(403).json({ message: 'Access not authorized' });
    }

    try {
        const data = jwt.verify(token, secreto); // Verificar el token
        req.user = data; // Almacenar los datos del usuario en `req.user`
        next(); // Pasar al siguiente middleware o controlador
    } catch (error) {
        return res.status(401).json({ message: 'Access not authorized: Invalid token' });
    }
};

export default authenticateToken;
