import { useState } from 'react';

function SearchBar({ onSearch, onLocate }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a city..."
        className="search-input"
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <button type="button" onClick={onLocate} className="btn" style={{ flex: 1 }}>
          📍 Use My Location
        </button>
        <button type="submit" className="btn" style={{ flex: 2 }}>
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;