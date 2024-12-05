import axios from 'axios';

const BASE_URL = process.env.REST_COUNTRIES_API;

export const fetchAllCountries = async () => {
  const { data } = await axios.get(`${BASE_URL}/all`);
  return data.map((country: any) => ({
    name: country.name.common,
    region: country.region,
    flag: country.flags.png,
    population: country.population,
    timezone: country.timezones[0] || '',
  }));
};

export const fetchCountryByCode = async (code: string) => {
  const { data } = await axios.get(`${BASE_URL}/alpha/${code}`);
  return {
    name: data.name.common,
    population: data.population,
    region: data.region,
    currencies: Object.values(data.currencies || {}).map((cur: any) => cur.name).join(', '),
    languages: Object.values(data.languages || {}).join(', '),
    flag: data.flags.png,
  };
};