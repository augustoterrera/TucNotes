import express from 'express'
import { loginUser, registerUser } from '../controllers/login.controller.js'

const router = express.Router()

router.post('/login', loginUser)
router.post('/register', registerUser)
router.post('/logout', (req, res) => { })
router.get('/protected', (req, res) => { })

export default router