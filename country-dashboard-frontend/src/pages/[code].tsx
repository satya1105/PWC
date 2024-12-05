import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCountryDetails } from '../services/api';

const CountryDetails = () => {
  const router = useRouter();
  const { code } = router.query;
  const [country, setCountry] = useState<any>(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      if (!code) return;
      try {
        const { data } = await getCountryDetails(code as string);
        setCountry(data);
      } catch (error) {
        console.error('Error fetching country details:', error);
      }
    };

    fetchCountryDetails();
  }, [code]);

  if (!country) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{country.name}</h1>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Currency: {Object.keys(country.currencies || {}).join(', ')}</p>
    </div>
  );
};

export default CountryDetails;