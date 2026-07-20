import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import WeatherCard from '../components/WeatherCard';
import DailyForecast from '../components/DailyForecast';

function WeatherDetail() {
  const { city } = useParams();
  const cityName = city.replace(/-/g, ' ');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      setError(null);

      try {
        // Get coordinates
        const geoResponse = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
        );
        const geoData = await geoResponse.json();

        if (!geoData.results) {
          throw new Error(`City "${cityName}" not found`);
        }

        const { latitude, longitude, name, country } = geoData.results[0];

        // Get weather data
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
  }, [cityName]);

  if (loading) {
    return (
      <div className="container">
        <div className="spinner"></div>
        <p style={{ textAlign: 'center' }}>Loading weather...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="card" style={{ background: 'rgba(239, 68, 68, 0.2)', textAlign: 'center' }}>
          <p style={{ color: '#ef4444', fontSize: '18px' }}>️ {error}</p>
          <Link to="/" className="btn" style={{ display: 'inline-block', marginTop: '15px', textDecoration: 'none' }}>
            ← Back to Search
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {/* Back Button */}
      <Link 
        to="/" 
        style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}
      >
        ← Back to Search
      </Link>

      {/* Main Weather */}
      <div style={{ marginBottom: '30px' }}>
        <WeatherCard 
          city={weatherData.city}
          temperature={weatherData.temperature}
          windSpeed={weatherData.windSpeed}
          conditionCode={weatherData.weatherCode}
        />
      </div>

      {/* 7-Day Forecast */}
      <DailyForecast dailyData={weatherData.daily} />
    </div>
  );
}

export default WeatherDetail;