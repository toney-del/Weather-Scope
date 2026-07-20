import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useFavorites } from '../context/FavoritesContext';

// Simple weather descriptions
const weatherDescriptions = {
  0: { icon: '☀️', text: 'Clear Sky' },
  1: { icon: '🌤️', text: 'Mostly Clear' },
  2: { icon: '⛅', text: 'Partly Cloudy' },
  3: { icon: '☁️', text: 'Cloudy' },
  45: { icon: '️', text: 'Foggy' },
  51: { icon: '🌦️', text: 'Light Rain' },
  53: { icon: '🌧️', text: 'Moderate Rain' },
  61: { icon: '🌧️', text: 'Rain' },
  63: { icon: '🌧️', text: 'Heavy Rain' },
  71: { icon: '🌨️', text: 'Snow' },
  73: { icon: '🌨️', text: 'Heavy Snow' },
  75: { icon: '❄️', text: 'Heavy Snow' },
  95: { icon: '⛈️', text: 'Thunderstorm' }
};

function WeatherCard({ city, temperature, windSpeed, conditionCode = 0 }) {
  const { unit } = useContext(ThemeContext);
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  
  const isFavorite = favorites.includes(city);
  const displayTemp = unit === 'F' ? Math.round((temperature * 9/5) + 32) : temperature;
  
  // Get weather info from the code
  const weather = weatherDescriptions[conditionCode] || weatherDescriptions[0];

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(city);
    } else {
      addFavorite(city);
    }
  };

  return (
    <div className="card" style={{ textAlign: 'center' }}>
      {/* Favorite Button */}
      <button 
        onClick={handleToggleFavorite}
        style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          background: 'none',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer'
        }}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>

      {/* City Name */}
      <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>{city}</h2>
      
      {/* Weather Icon */}
      <div className="weather-icon">{weather.icon}</div>
      
      {/* Temperature */}
      <div className="big-temp">{displayTemp}°{unit}</div>
      
      {/* Description */}
      <p style={{ fontSize: '20px', marginBottom: '20px' }}>{weather.text}</p>
      
      {/* Wind Speed */}
      <div className="detail-item" style={{ display: 'inline-block' }}>
        <span>💨</span>
        <span style={{ marginLeft: '8px', fontWeight: '600' }}>
          {windSpeed} km/h
        </span>
      </div>
    </div>
  );
}

export default WeatherCard;