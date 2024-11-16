const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

const apiKey = '321275d47f4b68073bc873c6fcba9412';
const ciudad = 'Montevideo';

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});