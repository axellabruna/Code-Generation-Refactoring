const fetch = require('node-fetch');

// Replace with your API key from OpenWeatherMap or any other weather API provider
const API_KEY = 'a526b0a914338b4eba6a0b02eeb0dc15';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data
async function getWeather(city) {
    try {
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(`Weather in ${data.name}, ${data.sys.country}:`);
        console.log(`Temperature: ${data.main.temp}°C`);
        console.log(`Weather: ${data.weather[0].description}`);
        console.log(`Humidity: ${data.main.humidity}%`);
        console.log(`Wind Speed: ${data.wind.speed} m/s`);
    } catch (error) {
        console.error('Failed to fetch weather data:', error.message);
    }
}

// Example usage
const city = 'London'; // Replace with the desired city
getWeather(city);