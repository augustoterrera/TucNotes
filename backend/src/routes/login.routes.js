import express from 'express'
import { loginUser, registerUser, protectedUser, logoutUser } from '../controllers/login.controller.js'
import authenticateToken from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/login', loginUser)
router.post('/register', registerUser)
router.get('/protected', authenticateToken, protectedUser)
router.post('/logout', logoutUser)

export default router