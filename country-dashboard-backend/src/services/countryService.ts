import axios from 'axios';
import cache from '../utils/cache';

const BASE_URL = process.env.REST_COUNTRIES_API_URL || 'https://restcountries.com/v3.1';

export const fetchAllCountries = async () => {
    const cachedData = cache.get('allCountries');
    if (cachedData) return cachedData;

    const { data } = await axios.get(`${BASE_URL}/all?fields=name,capital,region,population,flags,languages,borders,area`);
    const processedData = data.map((country: any) => ({
        name: country.name.common,
        population: country.population,
        region: country.region,
        capital: country.capital?.[0] || '',
        flag: country.flags?.png,
        currency: country.currencies || {},
    }));
    cache.set('allCountries', processedData);
    return processedData;
};

export const fetchCountryByCode = async (code: string) => {
    const cachedData = cache.get(`country_${code}`);
    if (cachedData) return cachedData;

    const { data } = await axios.get(`${BASE_URL}/alpha/${code}`);
    cache.set(`country_${code}`, data);
    return data;
};

export const fetchCountriesByRegion = async (region: string) => {
    const cachedData = cache.get(`region_${region}`);
    if (cachedData) return cachedData;

    const { data } = await axios.get(`${BASE_URL}/region/${region}`);
    cache.set(`region_${region}`, data);
    return data;
};

export const searchCountries = async (filters: any) => {
    const { name, capital, region, timezone } = filters;
    const allCountries = await fetchAllCountries();

    return allCountries.filter((country: any) => {
        return (
            (!name || country.name.toLowerCase().includes(name.toLowerCase())) &&
            (!capital || country.capital.toLowerCase().includes(capital.toLowerCase())) &&
            (!region || country.region.toLowerCase() === region.toLowerCase()) &&
            (!timezone || country.timezones.includes(timezone))
        );
    });
};
