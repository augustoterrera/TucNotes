import express from 'express';
import routesLogin from './routes/login.routes.js'
import cookieParser from 'cookie-parser'

const app = express();

// Middlewares globales
app.use(express.json());
app.use(cookieParser())

// Rutas
app.get('/', (req, res) => {
  res.send('Página Principal');
});
app.use('/', routesLogin)


export default app;