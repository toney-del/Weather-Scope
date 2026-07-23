import { createContext, useState, useEffect, useContext } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  // Load from localStorage on initial render
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (city) => {
    setFavorites((prev) => {
      // Prevent duplicates
      if (prev.includes(city)) return prev;
      return [...prev, city];
    });
  };

  const removeFavorite = (city) => {
    setFavorites((prev) => prev.filter((fav) => fav !== city));
  };

  // 👇 UPDATE FUNCTION
  const updateFavorite = (oldCity, newCity) => {
    setFavorites((prev) => 
      prev.map((city) => (city === oldCity ? newCity : city))
    );
  };

  return (
    // 👇 FIX: Added updateFavorite to the value object!
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, updateFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// Custom hook for easy access
export function useFavorites() {
  return useContext(FavoritesContext);
}