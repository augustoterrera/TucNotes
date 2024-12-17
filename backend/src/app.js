import express from 'express'
import routesLogin from './routes/login.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

// Middlewares globales
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  credentials: true,
}))
// Rutas
app.get('/', (req, res) => {
  res.send('Página Principal')
})
app.use('/', routesLogin)


export default app