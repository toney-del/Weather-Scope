import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { FavoritesProvider } from './context/FavoritesContext'; // 👈 Import it
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <FavoritesProvider> {/* 👈 Wrap App here */}
          <App />
        </FavoritesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);