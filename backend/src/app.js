import express from 'express'
import routesLogin from './routes/login.routes.js'
import routesNote from './routes/note.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

// Middlewares globales
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}))
// Rutas
app.get('/', (req, res) => {
  res.send('Página Principal')
})
app.use('/', routesLogin)
app.use('/', routesNote)


export default app