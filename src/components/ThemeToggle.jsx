import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'var(--color-sidebar)',
        color: 'var(--color-accent)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--border-radius)',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '0.9rem',
        fontFamily: 'var(--font-family)',
        transition: 'all 0.3s ease'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-accent)';
        e.currentTarget.style.color = '#ffffff';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-sidebar)';
        e.currentTarget.style.color = 'var(--color-accent)';
      }}
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
}

export default ThemeToggle;