const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 8080;

const API_KEY = '7d95d5faac405c8731d9dfb732d46648';

app.get('/weather', async (req, res) => {
    try {
        // Grab city and state from query string (?city=CityName&state=StateAbbr)
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
    console.log(`Weather server running on http://localhost:${PORT}`);
});
