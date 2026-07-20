import { useState, useEffect } from 'react';

export function useWeather(city) {
  const [weatherData, setWeatherData] = useState(null);
  // 👇 FIX: Start loading as true ONLY if a city is actually provided
  const [loading, setLoading] = useState(!!city); 
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) {
      setLoading(false);
      return; // Don't fetch if city is empty
    }

    async function fetchWeather() {
      setLoading(true);
      setError(null);
      setWeatherData(null);

      try {
        const geoResponse = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
        );
        const geoData = await geoResponse.json();

        if (!geoData.results) {
          throw new Error(`City "${city}" not found. Please try again.`);
        }

        const { latitude, longitude, name, country } = geoData.results[0];

        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
        );
        const weatherResult = await weatherResponse.json();

        setWeatherData({
          city: `${name}, ${country}`,
          temperature: weatherResult.current_weather.temperature,
          windSpeed: weatherResult.current_weather.windspeed,
          daily: weatherResult.daily
        });

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  return { weatherData, loading, error };
}