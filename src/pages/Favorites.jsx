import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { ThemeContext } from '../context/ThemeContext';

function Favorites() {
  const { favorites, addFavorite, removeFavorite, updateFavorite } = useFavorites();
  const { theme } = useContext(ThemeContext);
  
  // State for the "Create" form
  const [newCity, setNewCity] = useState('');
  
  // State for the "Update" form
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  // CREATE: Add new item through a form
  const handleCreate = (e) => {
    e.preventDefault();
    if (newCity.trim()) {
      addFavorite(newCity.trim());
      setNewCity('');
    }
  };

  // UPDATE: Start editing
  const startEdit = (city) => {
    setEditingId(city);
    setEditValue(city);
  };

  // UPDATE: Save edit
  const saveEdit = (oldCity) => {
    if (editValue.trim() && editValue !== oldCity) {
      updateFavorite(oldCity, editValue.trim());
    }
    setEditingId(null);
    setEditValue('');
  };

  if (favorites.length === 0 && !newCity) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h1>❤️ Your Favorite Cities</h1>
        <p style={{ color: 'var(--color-text)', marginBottom: '1.5rem' }}>
          You haven't saved any cities yet. Use the form below to add one!
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>❤️ Your Favorite Cities</h1>
      
      {/* CREATE: Form to add new items */}
      <form onSubmit={handleCreate} className="card" style={{ marginBottom: '2rem', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
          placeholder="Add a new city (e.g., Paris)"
          className="search-input"
          style={{ marginBottom: 0, flex: 1 }}
        />
        <button type="submit" className="btn">Add City</button>
      </form>

      {/* READ & UPDATE & DELETE: List of items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {favorites.map((city) => (
          <div 
            key={city} 
            className="card"
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '1rem'
            }}
          >
            {/* UPDATE: Show input if editing, otherwise show text */}
            {editingId === city ? (
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="search-input"
                style={{ marginBottom: 0, flex: 1, marginRight: '10px' }}
                autoFocus
              />
            ) : (
              <span style={{ fontWeight: '600', color: 'var(--color-text-h)', flex: 1 }}>
                {city}
              </span>
            )}

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {/* UPDATE: Save or Edit button */}
              {editingId === city ? (
                <button onClick={() => saveEdit(city)} className="btn" style={{ padding: '8px 12px', fontSize: '14px' }}>
                  Save
                </button>
              ) : (
                <button onClick={() => startEdit(city)} className="btn" style={{ padding: '8px 12px', fontSize: '14px', backgroundColor: '#f59e0b' }}>
                  Edit
                </button>
              )}

              {/* DELETE: Remove button */}
              <button 
                onClick={() => removeFavorite(city)}
                className="btn" 
                style={{ padding: '8px 12px', fontSize: '14px', backgroundColor: '#ef4444' }}
              >
                Delete
              </button>

              <Link 
                to={`/weather/${city.replace(/\s+/g, '-')}`}
                className="btn" 
                style={{ padding: '8px 12px', fontSize: '14px' }}
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;