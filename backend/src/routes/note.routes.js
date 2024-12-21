import express from 'express'
import { createNote, getNotes } from '../controllers/note.controller.js'

const router = express.Router()

router.post('/createNote', createNote)
router.get('/getNotes', getNotes)

export default router