import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Settings() {
  const { unit, toggleUnit, theme } = useContext(ThemeContext);

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>⚙️ Settings</h1>
      <div style={{ 
        padding: '1.5rem', 
        backgroundColor: theme === 'dark' ? '#1e1e1e' : '#f8f9fa', 
        borderRadius: '8px',
        border: `1px solid ${theme === 'dark' ? '#333' : '#e9ecef'}`
      }}>
        <h3>Temperature Unit</h3>
        <p style={{ color: theme === 'dark' ? '#aaa' : '#666', marginBottom: '1rem' }}>
          Choose how you want to view temperatures across the entire app.
        </p>
        <button 
          onClick={toggleUnit}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#E91E8C',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}
        >
          Switch to °{unit === 'C' ? 'F' : 'C'}
        </button>
        <p style={{ marginTop: '1rem', fontSize: '1.2rem', fontWeight: 'bold', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
          Currently viewing in: °{unit}
        </p>
      </div>
    </div>
  );
}

export default Settings;