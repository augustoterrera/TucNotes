import Validations from "../../validations/userValidations.js"
import User from "../models/user.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


const loginUser = async (req, res) => {
    const { username, email, password } = req.body
    const secreto = process.env.SECRET_KEY
    try {
        Validations.password(password)

        const user = await User.findOne({ $or: [{ username: username }, { email: email }] })

        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isValid = await bcrypt.compareSync(password, user.password)
        const token = jwt.sign({ id: user._id, username: user.username, name: user.name, lastname: user.lastname }, secreto, { expiresIn: '1h' })

        if (!isValid) throw new Error('Password is invalid')

        res.status(200).cookie('access_token', token, { httpOnly: true, sameSite: 'strict', maxAge: 1000 * 60 * 60 }).json({ message: 'Login successfully', user: user.username })
    } catch (error) {
        res.json({ message: 'Error interno del servidor: ' + error })
    }
}
const registerUser = async (req, res) => {
    const { username, email, password, name, lastname } = req.body
    try {
        Validations.register(username, email, password, name, lastname)
        Validations.email(email)
        Validations.password(password)

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({ username, email, password: hashedPassword, name, lastname })
        const savedUser = await newUser.save()

        res.status(201).json({ message: 'User created successfully', user: savedUser })
    } catch (error) {
        res.json({ message: 'Error creating user: ' + error.message })
    }
}

const protectedUser = async (req, res) => {
    const token = req.cookies.access_token
    const secreto = process.env.SECRET_KEY
    if (!token) {
        return res.status(403).send('Access not authorized')
    }
    try {
        const data = jwt.verify(token, secreto)
        res.send(`Hola ${data.name} ${data.lastname} \nUsuario: ${data.username} \nToken: ${token}`)
    } catch (error) {
        res.status(401).send('Access not authorized')
    }
}

const logoutUser = async (req, res) => {
    res.clearCookie('access_token').json({message: 'Logout successfull'})
}

export { loginUser, registerUser, protectedUser, logoutUser }