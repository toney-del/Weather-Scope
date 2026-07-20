import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { useWeather } from '../hooks/useWeather';

function Home() {
  const [searchedCity, setSearchedCity] = useState('');
  const { weatherData, loading, error } = useWeather(searchedCity);

  const handleSearch = (city) => {
    setSearchedCity(city);
  };

  const handleLocate = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        const data = await response.json();
        const cityName = data.address.city || data.address.town || data.address.village;
        
        if (cityName) {
          handleSearch(cityName);
        }
      } catch (err) {
        alert("Could not get location");
      }
    });
  };

  return (
    <div className="container">
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '40px', marginBottom: '10px' }}>WeatherScope 🌤️</h1>
        <p>Your personal daily weather guide</p>
      </div>

      {/* Search */}
      <div className="card" style={{ marginBottom: '30px' }}>
        <SearchBar onSearch={handleSearch} onLocate={handleLocate} />
      </div>

      {/* Loading */}
      {loading && <div className="spinner"></div>}

      {/* Error */}
      {error && (
        <div className="card" style={{ background: 'rgba(239, 68, 68, 0.2)' }}>
          <p>⚠️ {error}</p>
        </div>
      )}

      {/* Weather Display */}
      {weatherData && !loading && (
        <div>
          {/* Main Weather Card */}
          <div className="card" style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>
              {weatherData.city}
            </h2>
            <div className="weather-icon">️</div>
            <div className="big-temp">{weatherData.temperature}°C</div>
            <p style={{ fontSize: '18px', marginBottom: '20px' }}>
              {weatherData.condition || 'Clear Sky'}
            </p>
            
            {/* Weather Details */}
            <div className="details-grid">
              <div className="detail-item">
                <div style={{ fontSize: '24px' }}>💨</div>
                <p style={{ fontSize: '14px' }}>Wind</p>
                <p style={{ fontWeight: '600' }}>{weatherData.windSpeed} km/h</p>
              </div>
              <div className="detail-item">
                <div style={{ fontSize: '24px' }}>💧</div>
                <p style={{ fontSize: '14px' }}>Humidity</p>
                <p style={{ fontWeight: '600' }}>--%</p>
              </div>
              <div className="detail-item">
                <div style={{ fontSize: '24px' }}>️</div>
                <p style={{ fontSize: '14px' }}>Visibility</p>
                <p style={{ fontWeight: '600' }}>Good</p>
              </div>
            </div>
          </div>

          {/* View Details Button */}
          <Link 
            to={`/weather/${searchedCity.replace(/\s+/g, '-')}`}
            className="btn"
            style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
          >
            View 7-Day Forecast →
          </Link>
        </div>
      )}
    </div>
  );
}

export default Home;