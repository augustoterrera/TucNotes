import mongoose, { Schema } from 'mongoose'

const noteSchema = new Schema({
    title: { type: String, required: true},
    content: { type: String, required: true},
    date: { type: Date, default: Date.now },
    isPinned: { type: Boolean, default: false},
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
})

const Note = mongoose.model('Note', noteSchema, 'notes')

export default Note