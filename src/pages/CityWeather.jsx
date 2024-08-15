import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CityWeather() {
  const { cityName } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={APIKey}"
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error getting weather data:", error);
      }
    };

    fetchWeatherData();
  }, [cityName, apiKey]);

  if (!weatherData) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h1>Weather in {weatherData.name}</h1>
      <p>Temp: {weatherData.main.temp}°C</p>
      <p>Description: {weatherData.weather[0].description}</p>
    </div>
  );
}

export default CityWeather;
