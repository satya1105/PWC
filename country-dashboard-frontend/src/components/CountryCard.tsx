// import React from 'react';

// interface CountryCardProps {
//   country: {
//     name: string;
//     region: string;
//     flag: string;
//     timezone: string;
//   };
// }

// const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
//   const currentTime = new Date().toLocaleTimeString('en-US', {
//     timeZone: country.timezone,
//     hour12: true,
//   });

//   return (
//     <div className="p-4 border rounded-lg shadow-md">
//       <img src={country.flag} alt={`${country.name} flag`} className="w-16 h-10" />
//       <h2 className="text-lg font-bold">{country.name}</h2>
//       <p>Region: {country.region}</p>
//       <p>Current Time: {currentTime}</p>
//     </div>
//   );
// };

// export default CountryCard;


// import React from 'react';

// interface CountryCardProps {
//   country: {
//     name: string;
//     region: string;
//     flag: string;
//     population: number;
//   };
// }

// const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
//   return (
//     <div className="p-4 bg-white border rounded-lg shadow hover:shadow-lg">
//       <img src={country.flag} alt={`${country.name} flag`} className="w-full h-32 object-cover mb-4 rounded" />
//       <h2 className="text-lg font-bold mb-2">{country.name}</h2>
//       <p>Region: {country.region}</p>
//       <p>Population: {country.population.toLocaleString()}</p>
//     </div>
//   );
// };

// export default CountryCard;

// import React from 'react';

// interface CountryCardProps {
//   country: {
//     name: string;
//     region: string;
//     flag: string;
//     population: number;
//   };
//   onCompare: (country: any) => void;
// }

// const CountryCard: React.FC<CountryCardProps> = ({ country, onCompare }) => {
//   return (
//     <div className="p-4 bg-white border rounded-lg shadow hover:shadow-lg">
//       <img
//         src={country.flag}
//         alt={`${country.name} flag`}
//         className="w-full h-32 object-cover mb-4 rounded"
//       />
//       <h2 className="text-lg font-bold mb-2">{country.name}</h2>
//       <p>Region: {country.region}</p>
//       <p>Population: {country.population.toLocaleString()}</p>
//       <button
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         onClick={() => onCompare(country)}
//       >
//         Compare
//       </button>
//     </div>
//   );
// };

// export default CountryCard;


import React from 'react';

interface CountryCardProps {
  country: {
    name: string;
    region: string;
    flag: string;
    population: number;
  };
  onCompare: (country: any) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, onCompare }) => {
  return (
    <div className="p-4 bg-white border rounded-lg shadow hover:shadow-lg">
      <img
        src={country.flag}
        alt={`${country.name} flag`}
        className="w-full h-32 object-cover mb-4 rounded"
      />
      <h2 className="text-lg font-bold mb-2">{country.name}</h2>
      <p>Region: {country.region}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => onCompare(country)}
      >
        Compare
      </button>
    </div>
  );
};

export default CountryCard;