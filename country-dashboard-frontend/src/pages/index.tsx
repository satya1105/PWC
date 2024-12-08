import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import CountryCard from '../components/CountryCard';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

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
  const [comparison, setComparison] = useState<Country[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const { data } = await axios.get<Country[]>('http://localhost:3001/countries');
        setCountries(data);
        setFilteredCountries(data);
        setError(null); // Clear previous errors
      } catch (err) {
        console.error('Error fetching countries:', err);
        setError('Failed to fetch countries. Please try again later.');
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const filtered = countries.filter((country) => {
      const matchesSearch = searchQuery
        ? country.name.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      const matchesRegion = regionFilter ? country.region === regionFilter : true;
      return matchesSearch && matchesRegion;
    });

    setFilteredCountries(filtered);
  }, [searchQuery, regionFilter, countries]);

  const handleCompare = (country: Country) => {
    if (comparison.length < 2 && !comparison.find((c) => c.name === country.name)) {
      setComparison([...comparison, country]);
    }
  };

  const clearComparison = () => {
    setComparison([]);
  };

  const chartData: { series: { name: string; data: number[] }[]; options: ApexOptions } = {
    series: [
      {
        name: 'Population',
        data: comparison.map((country) => country.population),
      },
    ],
    options: {
      chart: { type: 'bar', toolbar: { show: false } },
      xaxis: {
        categories: comparison.map((country) => country.name),
      },
      title: { text: 'Population Comparison', align: 'center' },
      colors: ['#008FFB', '#FF4560'],
    },
  };

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

      {error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <>
          {comparison.length > 0 && (
            <div className="bg-white p-6 mb-6 rounded shadow">
              <h2 className="text-xl font-bold mb-4">Population Comparison</h2>
              {comparison.length === 2 ? (
                <Chart
                  options={chartData.options}
                  series={chartData.series}
                  type="bar"
                  height={350}
                />
              ) : (
                <p className="text-sm text-gray-500">
                  Select one more country to complete the comparison.
                </p>
              )}
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={clearComparison}
              >
                Clear Comparison
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCountries.map((country) => (
              <div
                key={country.name}
                className={`cursor-pointer ${
                  comparison.find((c) => c.name === country.name) ? 'border-2 border-blue-500' : ''
                }`}
                onClick={() => handleCompare(country)}
              >
                <CountryCard country={country} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;