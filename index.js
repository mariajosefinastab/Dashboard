const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

const apiKey = '61da877e325dc434f635fb59cd9e17ff';
const ciudad = 'Montevideo';

app.get('/clima' , async (req, res) => {
    try {
        const respuesta = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${apiKey}&lang=es`
        );
        const datosClima = respuesta.data;
        res.json({
            ciudad: datosClima.name,
            temperatura: `${datosClima.main.temp} °C`,
            description: datosClima.weather[0].description,
        });
    } catch (error) {
        res.status(500).json({ error: 'No hemos logrado obtener los datos del clima'});
    }
})

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});