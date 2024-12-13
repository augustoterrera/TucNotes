import mongoose, { mongo, Schema } from 'mongoose'

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true }
})

const User = mongoose.model('User', userSchema, 'users')

export default User