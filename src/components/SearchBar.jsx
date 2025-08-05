import React, { useState, useRef, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

// The component now accepts the 'onSearch' function as a prop
const SearchBar = ({ onSearch }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef(null);

  // This function now calls the onSearch prop passed from App.jsx
  const handleSearch = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      onSearch(e.target.value); // Pass the city name up to the App component
      e.target.blur(); // This will close the search bar
    }
  };

  useEffect(() => {
    if (isSearchOpen) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <div
      className={`search-bar ${isSearchOpen ? 'open' : 'closed'}`}
      onClick={() => !isSearchOpen && setIsSearchOpen(true)}
    >
      <FiSearch size={22} className="search-icon" />
      <input
        ref={inputRef}
        type="text"
        placeholder="Search for a city and press Enter"
        onBlur={() => setIsSearchOpen(false)}
        onKeyDown={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
