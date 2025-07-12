const express = require('express');
const axios = require('axios');
const app = express();

// Use process.env.PORT for Render, fallback to 8080 locally
const PORT = process.env.PORT || 8080;

// Use API key from environment variable (safer for Render)
const API_KEY = process.env.API_KEY;

app.get('/weather', async (req, res) => {
    try {
        const city = req.query.city || 'Dallas';
        const state = req.query.state || 'TX';
        const country = 'US';

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${API_KEY}&units=imperial`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Failed to get weather data.');
    }
});

app.listen(PORT, () => {
    console.log(`Weather server running on port ${PORT}`);
});
