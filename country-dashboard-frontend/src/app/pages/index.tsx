import React, { useEffect, useState } from 'react';
import { getCountries } from '../services/api';
import CountryCard from '../components/CountryCard';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';

const Home = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const { data } = await getCountries();
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
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <SearchBar onSearch={setSearchQuery} />
        <FilterDropdown
          options={['Asia', 'Europe', 'Africa', 'Oceania', 'Americas']}
          onSelect={setRegionFilter}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCountries.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;