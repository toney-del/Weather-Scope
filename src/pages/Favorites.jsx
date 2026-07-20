import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Favorites() {
  const { favorites, removeFavorite } = useFavorites();
  const { theme } = useContext(ThemeContext);

  if (favorites.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h1>❤️ Your Favorites</h1>
        <p style={{ color: theme === 'dark' ? '#aaa' : '#666' }}>
          You haven't saved any cities yet. Search for a city and click the heart icon to save it!
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>❤️ Your Favorites</h1>
      <p style={{ color: theme === 'dark' ? '#aaa' : '#666', marginBottom: '1.5rem' }}>
        You have {favorites.length} saved {favorites.length === 1 ? 'city' : 'cities'}.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {favorites.map((city) => (
          // Course note reminder: Always use a unique key in .map()!
          <div 
            key={city} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '1rem', 
              backgroundColor: theme === 'dark' ? '#1e1e1e' : '#f8f9fa', 
              borderRadius: '8px',
              border: `1px solid ${theme === 'dark' ? '#333' : '#e9ecef'}`
            }}
          >
            <span style={{ fontWeight: 'bold', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
              {city}
            </span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Link 
                to={`/weather/${city.replace(/\s+/g, '-')}`}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#E91E8C',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '0.9rem'
                }}
              >
                View
              </Link>
              <button 
                onClick={() => removeFavorite(city)}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#ff4d4f',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;