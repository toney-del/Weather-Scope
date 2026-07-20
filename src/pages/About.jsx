import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '800px', 
      margin: '0 auto',
      fontFamily: 'var(--font-family)'
    }}>
      <h1 style={{ 
        color: 'var(--color-text-h)',
        marginBottom: '1.5rem',
        textAlign: 'center'
      }}>
        About WeatherScope 🌤️
      </h1>

      <div style={{
        padding: '1.5rem',
        backgroundColor: 'var(--color-sidebar)',
        borderRadius: 'var(--border-radius)',
        border: '1px solid var(--border)',
        marginBottom: '1.5rem'
      }}>
        <h2 style={{ 
          color: 'var(--color-text-h)', 
          marginBottom: '1rem' 
        }}>
          Your Personal Weather Companion
        </h2>
        <p style={{ 
          color: 'var(--color-text)',
          lineHeight: '1.6' 
        }}>
          WeatherScope is a modern, intuitive weather application designed to give you accurate, up-to-date weather information for any location around the world. Whether you're planning your day, checking conditions for a trip, or simply curious about the weather in another city, WeatherScope provides everything you need in one clean, easy-to-use interface.
        </p>
      </div>

      <div style={{
        padding: '1.5rem',
        backgroundColor: 'var(--color-sidebar)',
        borderRadius: 'var(--border-radius)',
        border: '1px solid var(--border)',
        marginBottom: '1.5rem'
      }}>
        <h2 style={{ 
          color: 'var(--color-text-h)', 
          marginBottom: '1rem' 
        }}>
          Key Features
        </h2>
        
        <ul style={{ 
          color: 'var(--color-text)',
          lineHeight: '1.8',
          paddingLeft: '1.5rem'
        }}>
          <li><strong>Real-Time Weather Data:</strong> Get current conditions, temperature, wind speed, and more for any location</li>
          <li><strong>7-Day Forecast:</strong> Plan ahead with detailed daily forecasts showing high/low temperatures and weather conditions</li>
          <li><strong>Hourly Weather:</strong> See temperature trends throughout the day for better planning</li>
          <li><strong>Location Detection:</strong> Automatically detect your current location with one click</li>
          <li><strong>Favorite Locations:</strong> Save your favorite cities for quick access</li>
          <li><strong>Dark/Light Mode:</strong> Switch between themes based on your preference or time of day</li>
          <li><strong>Temperature Units:</strong> View temperatures in Celsius or Fahrenheit</li>
          <li><strong>Beautiful Visual Design:</strong> Clean, modern interface that makes weather data easy to understand</li>
        </ul>
      </div>

      <div style={{
        padding: '1.5rem',
        backgroundColor: 'var(--color-sidebar)',
        borderRadius: 'var(--border-radius)',
        border: '1px solid var(--border)',
        marginBottom: '1.5rem'
      }}>
        <h2 style={{ 
          color: 'var(--color-text-h)', 
          marginBottom: '1rem' 
        }}>
          How to Use WeatherScope
        </h2>
        
        <p style={{ 
          color: 'var(--color-text)',
          lineHeight: '1.6',
          marginBottom: '1rem'
        }}>
          Using WeatherScope is simple:
        </p>
        
        <ol style={{ 
          color: 'var(--color-text)',
          lineHeight: '1.8',
          paddingLeft: '1.5rem'
        }}>
          <li>Search for any city in the search bar</li>
          <li>Click the location button to detect your current location</li>
          <li>View current weather conditions at a glance</li>
          <li>Tap "View Full Details" for the 7-day forecast</li>
          <li>Save favorite locations with the heart icon</li>
          <li>Switch between light and dark mode for comfortable viewing</li>
        </ol>
      </div>

      <div style={{ 
        textAlign: 'center', 
        marginTop: '2rem',
        color: 'var(--color-text-muted)',
        fontSize: '0.9rem'
      }}>
        <p>© {new Date().getFullYear()} WeatherScope, Your personal weather companion.</p>
        <p>Weather data powered by Open-Meteo API</p>
      </div>
    </div>
  );
}

export default About;