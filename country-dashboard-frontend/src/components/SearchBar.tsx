import React from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      className="w-full p-2 border rounded-md mb-6"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;