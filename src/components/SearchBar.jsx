import React, { useState, useRef, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      console.log('Searching for:', e.target.value);
      e.target.blur();
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