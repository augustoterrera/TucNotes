import User from '../models/user.js'
import Note from '../models/note.js'
import mongoose from 'mongoose'

const createNote = async (req, res) => {
    const { userId, title, content } = req.body
    try {
        if (!userId || !title || !content) {
            return res.status(400).json({ message: 'Title and content are required' });
        }

        const newNote = new Note({
            title,
            content,
            user: userId
        })

        const savedNote = await newNote.save()

        res.status(201).json({ message: 'Note created successfully', note: savedNote })
    } catch (error) {
        res.json({ message: 'Error creating note: ' + error.message })
    }
}

const getNotes = async (req, res) => {
    const { userId } = req.body

    try {
        // Validar que el userId sea válido
        if (!mongoose.isValidObjectId(userId)) {
            return res.status(400).json({ message: 'ID de usuario inválido' });
        }

        // Buscar al usuario y poblar sus notas
        const notes = await Note.find({ user: userId }).sort({ isPinned: -1, date: -1 });

        if (!notes || notes.length === 0) {
            return res.status(404).json({ message: 'No se encontraron notas para este usuario' });
        }

        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las notas: ' + error.message });
    }
};

export { createNote, getNotes }