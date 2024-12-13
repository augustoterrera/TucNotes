import express from 'express';
import routesLogin from './routes/login.routes.js'

const app = express();

// Middlewares globales
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
  res.send('Página Principal');
});
app.use('/', routesLogin)


export default app;