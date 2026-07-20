// src/pages/NotFound.jsx
import { useNavigate, Link } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '6rem', margin: 0, color: '#E91E8C' }}>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        The weather station you are looking for doesn't exist, or you typed the URL wrong.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link 
          to="/" 
          style={{ 
            padding: '0.75rem 1.5rem', backgroundColor: '#E91E8C', color: 'white', 
            textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' 
          }}
        >
          Go to Home
        </Link>
        
        <button 
          onClick={() => navigate(-1)}
          style={{ 
            padding: '0.75rem 1.5rem', backgroundColor: '#f0f0f0', color: '#333', 
            border: '1px solid #ccc', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' 
          }}
        >
          ← Go Back
        </button>
      </div>
    </div>
  );
}

export default NotFound;