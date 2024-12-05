import React from 'react';

interface CountryCardProps {
  country: {
    name: string;
    region: string;
    flag: string;
    timezone: string;
  };
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    timeZone: country.timezone,
    hour12: true,
  });

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <img src={country.flag} alt={`${country.name} flag`} className="w-16 h-10" />
      <h2 className="text-lg font-bold">{country.name}</h2>
      <p>Region: {country.region}</p>
      <p>Current Time: {currentTime}</p>
    </div>
  );
};

export default CountryCard;