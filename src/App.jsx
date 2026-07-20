import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';

import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Settings from './pages/Settings';
import About from './pages/About';
import WeatherDetail from './pages/WeatherDetail';
import NotFound from './pages/NotFound';

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '1rem', 
        borderBottom: '1px solid var(--border)' 
      }}>
        <Navbar />
        <ThemeToggle />
      </div>
      
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
          <Route path="/weather/:city" element={<WeatherDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;