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




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import dynamic from 'next/dynamic';
// import CountryCard from '../components/CountryCard';
// import SearchBar from '../components/SearchBar';
// import FilterDropdown from '../components/FilterDropdown';

// // Dynamically import ApexCharts to prevent SSR issues
// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// interface Country {
//   name: string;
//   region: string;
//   flag: string;
//   population: number;
// }

// const Home: React.FC = () => {
//   const [countries, setCountries] = useState<Country[]>([]);
//   const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [regionFilter, setRegionFilter] = useState('');
//   const [comparison, setComparison] = useState<Country[]>([]);

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

//   const handleCompare = (country: Country) => {
//     if (comparison.length < 2 && !comparison.find((c) => c.name === country.name)) {
//       setComparison([...comparison, country]);
//     }
//   };

//   const chartData = {
//     series: [
//       {
//         name: 'Population',
//         data: comparison.map((country) => country.population),
//       },
//     ],
//     options: {
//       chart: { type: 'bar', toolbar: { show: false } },
//       xaxis: {
//         categories: comparison.map((country) => country.name),
//       },
//       title: { text: 'Population Comparison', align: 'center' },
//     },
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <header className="mb-6">
//         <h1 className="text-3xl font-bold text-center">Country Information Dashboard</h1>
//       </header>

//       <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
//         <SearchBar onSearch={setSearchQuery} />
//         <FilterDropdown
//           options={['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']}
//           onSelect={setRegionFilter}
//         />
//       </div>

//       {comparison.length > 0 && (
//         <div className="bg-white p-6 mb-6 rounded shadow">
//           <h2 className="text-xl font-bold mb-4">Comparison</h2>
//           <Chart options={chartData.options} series={chartData.series} type="bar" height={350} />
//           <button
//             className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//             onClick={() => setComparison([])}
//           >
//             Clear Comparison
//           </button>
//         </div>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredCountries.map((country) => (
//           <CountryCard key={country.name} country={country} onCompare={handleCompare} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import dynamic from 'next/dynamic';
// import CountryCard from '../components/CountryCard';
// import SearchBar from '../components/SearchBar';
// import FilterDropdown from '../components/FilterDropdown';

// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// interface Country {
//   name: string;
//   region: string;
//   flag: string;
//   population: number;
// }

// const Home: React.FC = () => {
//   const [countries, setCountries] = useState<Country[]>([]);
//   const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [regionFilter, setRegionFilter] = useState('');
//   const [comparison, setComparison] = useState<Country[]>([]);

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

//   const handleCompare = (country: Country) => {
//     if (comparison.length < 2 && !comparison.find((c) => c.name === country.name)) {
//       setComparison([...comparison, country]);
//     }
//   };

//   const chartData = {
//     series: [
//       {
//         name: 'Population',
//         data: comparison.map((country) => country.population),
//       },
//     ],
//     options: {
//       chart: { type: 'bar', toolbar: { show: false } },
//       xaxis: {
//         categories: comparison.map((country) => country.name),
//       },
//       title: { text: 'Population Comparison', align: 'center' },
//       colors: ['#008FFB', '#FF4560'], // Custom colors for two countries
//     },
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <header className="mb-6">
//         <h1 className="text-3xl font-bold text-center">Country Information Dashboard</h1>
//       </header>

//       <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
//         <SearchBar onSearch={setSearchQuery} />
//         <FilterDropdown
//           options={['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']}
//           onSelect={setRegionFilter}
//         />
//       </div>

//       {comparison.length > 0 && (
//         <div className="bg-white p-6 mb-6 rounded shadow">
//           <h2 className="text-xl font-bold mb-4">Population Comparison</h2>
//           {comparison.length === 2 ? (
//             <Chart options={chartData.options} series={chartData.series} type="bar" height={350} />
//           ) : (
//             <p className="text-sm text-gray-500">
//               Select one more country to complete the comparison.
//             </p>
//           )}
//           <button
//             className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//             onClick={() => setComparison([])}
//           >
//             Clear Comparison
//           </button>
//         </div>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredCountries.map((country) => (
//           <CountryCard key={country.name} country={country} onCompare={handleCompare} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;


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

  // Fetch countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const { data } = await axios.get<Country[]>('http://localhost:3001/countries');
        setCountries(data);
        setFilteredCountries(data);
      } catch (err) {
        console.error('Error fetching countries:', err);
        setError('Failed to fetch country data. Please try again later.');
      }
    };

    fetchCountries();
  }, []);

  // Filter countries based on search and region
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

  // Add or remove country for comparison
  const handleCompare = (country: Country) => {
    if (comparison.find((c) => c.name === country.name)) {
      setComparison((prev) => prev.filter((c) => c.name !== country.name));
    } else if (comparison.length < 2) {
      setComparison((prev) => [...prev, country]);
    }
  };

  // Chart data configuration
  const chartData: { series: { name: string; data: number[] }[]; options: ApexOptions } = {
    series: [
      {
        name: 'Population',
        data: comparison.map((country) => country.population),
      },
    ],
    options: {
      chart: { type: 'bar' as const, toolbar: { show: false } },
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
                onClick={() => setComparison([])}
              >
                Clear Comparison
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCountries.map((country) => (
              <CountryCard
                key={country.name}
                country={country}
                onCompare={handleCompare}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;