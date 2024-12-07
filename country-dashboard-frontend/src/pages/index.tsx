// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// interface Country {
//   name: string;
//   region: string;
//   flag: string;
//   timezone: string;
//   population: number;
// }

// const Home: React.FC = () => {
//   const [countries, setCountries] = useState<Country[]>([]);
//   const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [regionFilter, setRegionFilter] = useState('');

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const { data } = await axios.get<Country[]>('http://localhost:3001/countries');
//         setCountries(data);
//         setFilteredCountries(data);
//       } catch (error) {
//         console.error('Error fetching countries:', error);
//       }
//     };

//     fetchCountries();
//   }, []);

//   useEffect(() => {
//     let filtered = countries;

//     if (searchQuery) {
//       filtered = filtered.filter((country) =>
//         country.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (regionFilter) {
//       filtered = filtered.filter((country) => country.region === regionFilter);
//     }

//     setFilteredCountries(filtered);
//   }, [searchQuery, regionFilter, countries]);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <header className="mb-6">
//         <h1 className="text-3xl font-bold text-center">Country Information Dashboard</h1>
//       </header>

//       <div className="mb-6 flex flex-col sm:flex-row justify-between gap-4">
//         <input
//           type="text"
//           placeholder="Search by country name..."
//           className="w-full sm:w-1/2 p-2 border rounded-md"
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <select
//           className="w-full sm:w-1/3 p-2 border rounded-md"
//           onChange={(e) => setRegionFilter(e.target.value)}
//         >
//           <option value="">Filter by Region</option>
//           <option value="Africa">Africa</option>
//           <option value="Americas">Americas</option>
//           <option value="Asia">Asia</option>
//           <option value="Europe">Europe</option>
//           <option value="Oceania">Oceania</option>
//         </select>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredCountries.map((country) => (
//           <div key={country.name} className="bg-white border rounded-lg shadow-md overflow-hidden">
//             <img
//               src={country.flag}
//               alt={`${country.name} flag`}
//               className="w-full h-32 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-bold mb-2">{country.name}</h2>
//               <p className="text-sm text-gray-600">Region: {country.region}</p>
//               <p className="text-sm text-gray-600">
//                 Population: {country.population.toLocaleString()}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryCard from '../components/CountryCard';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';

interface Country {
  name: string;
  region: string;
  flag: string;
  population: number;
}

const Home: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const { data } = await axios.get<Country[]>('http://localhost:3001/countries');
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    let filtered = countries;

    if (searchQuery) {
      filtered = filtered.filter((country) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (regionFilter) {
      filtered = filtered.filter((country) => country.region === regionFilter);
    }

    setFilteredCountries(filtered);
  }, [searchQuery, regionFilter, countries]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center">Country Information Dashboard</h1>
      </header>

      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <SearchBar onSearch={setSearchQuery} />
        <FilterDropdown
          options={['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']}
          onSelect={setRegionFilter}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCountries.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;