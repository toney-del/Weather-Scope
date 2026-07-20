import { NavLink } from 'react-router-dom';

function Navbar() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? 'var(--color-accent)' : 'var(--text)',
    fontWeight: isActive ? '600' : '500',
    textDecoration: 'none',
    transition: 'color 0.2s ease, background-color 0.2s ease',
    padding: '0.5rem 1rem',
    borderRadius: 'var(--border-radius)',
  });

  return (
    <nav style={{ 
      padding: '1rem', 
      display: 'flex', 
      gap: '0.5rem',
      justifyContent: 'center',
      fontFamily: 'var(--font-family)'
    }}>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/favorites" style={linkStyle}>Favorites</NavLink>
      <NavLink to="/settings" style={linkStyle}>Settings</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>
    </nav>
  );
}

export default Navbar;