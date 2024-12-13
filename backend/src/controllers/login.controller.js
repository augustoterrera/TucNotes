import User from "../models/user.js"

const loginUser = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(400).json({ message: 'Usuario o contraseña incorrecta' });
        }
        const isPasswordMatch = await user.matchPassword(password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: 'Credenciales incorrectas' });
        }

    } catch (error) {
        res.json({ message: 'Error interno del servidor: ' + error })
    }
}
const registerUser = async (req, res) => {
    const { username, email, password, name, lastname } = req.body
    try {
        if (!username || !email || !password || !name || !lastname) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const newUser = new User({ username, email, password, name, lastname })
        const savedUser = await newUser.save()

        res.status(201).json({ message: 'User created successfully', user: savedUser })
    } catch (error) {
        res.json({ message: 'Error creating user: ' + error.message })
    }
}

export { loginUser, registerUser }