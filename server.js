import express from 'express';
import views from './routes/views.routes.js';
import apiRoute from './api/routes/views.routes.js'

const app = express();

// Middleware para parsear el body en JSON y urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(views);
app.use('/api', apiRoute)

app.get('/', (req, res) => {
  const name = process.env.NAME || '<a href="/vehiculos">Vehículos</a>';
  res.send(`${name}!`);
});

app.listen(3333, () => console.log("Server on"));