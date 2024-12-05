// import React from 'react';

// interface SearchBarProps {
//   onSearch: (query: string) => void;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     onSearch(e.target.value);
//   };

//   return (
//     <input
//       type="text"
//       placeholder="Search countries..."
//       className="p-2 border rounded w-full"
//       onChange={handleSearch}
//     />
//   );
// };

// export default SearchBar;

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