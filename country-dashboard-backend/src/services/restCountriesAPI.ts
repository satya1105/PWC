// import axios from 'axios';
// import NodeCache from 'node-cache';

// // Cache for performance improvement
// const cache = new NodeCache({ stdTTL: 3600 }); // Cache data for 1 hour

// export const fetchAllCountries = async (): Promise<any[]> => {
//   try {
//     if (cache.has('countries')) {
//       console.log('Returning cached countries data.');
//       return cache.get('countries') as any[];
//     }

//     // Define the URL
//     const url = 'https://restcountries.com/v3.1/all';
//     console.log(`Fetching countries from URL: ${url}`);

//     // Make the API call
//     const response = await axios.get(url);

//     // Cache and return the data
//     const countries = response.data;
//     cache.set('countries', countries);
//     return countries;
//   } catch (error) {
//     const errorMessage = (error instanceof Error) ? error.message : 'Unknown error occurred';
//     console.error(`[Error] fetchAllCountries: ${errorMessage}`);
//     throw new Error('Failed to fetch countries from the REST Countries API');
//   }
// };

// import axios from 'axios';
// import NodeCache from 'node-cache';

// // Initialize cache with a standard time-to-live of 1 hour
// const cache = new NodeCache({ stdTTL: 3600 });

// /**
//  * Fetch all countries from the REST Countries API with caching.
//  * @returns {Promise<any[]>} List of countries.
//  * @throws {Error} If the API call fails.
//  */
// export const fetchAllCountries = async (): Promise<any[]> => {
//   try {
//     // Check if countries data is already in the cache
//     if (cache.has('countries')) {
//       console.log('Returning cached countries data.');
//       return cache.get('countries') as any[];
//     }

//     // API URL
//     const url = 'https://restcountries.com/v3.1/all';
//     console.log(`Fetching countries from URL: ${url}`);

//     // Fetch data from REST Countries API
//     const { data } = await axios.get<any[]>(url);

//     // Store data in cache for future requests
//     cache.set('countries', data);

//     return data;
//   } catch (error) {
//     const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
//     console.error(`[Error] fetchAllCountries: ${errorMessage}`);
//     throw new Error('Failed to fetch countries from the REST Countries API');
//   }
// };

import axios from 'axios';
import NodeCache from 'node-cache';

// Initialize cache with a standard time-to-live of 1 hour
const cache = new NodeCache({ stdTTL: 3600 });

/**
 * Fetch all countries from the REST Countries API with caching.
 * @returns {Promise<any[]>} List of countries.
 * @throws {Error} If the API call fails.
 */
export const fetchAllCountries = async (): Promise<any[]> => {
  try {
    // Check if countries data is already cached
    if (cache.has('countries')) {
      console.log('Returning cached countries data.');
      return cache.get('countries') as any[];
    }

    const url = 'https://restcountries.com/v3.1/all'; // API endpoint
    console.log(`Fetching countries from URL: ${url}`);

    // Fetch data from REST Countries API
    const { data } = await axios.get<any[]>(url);

    // Cache data for future use
    cache.set('countries', data);

    return data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error(`[Error] fetchAllCountries: ${errorMessage}`);
    throw new Error('Failed to fetch countries from the REST Countries API');
  }
};

/**
 * Fetch a country by its code from the REST Countries API.
 * @param code - The country code.
 * @returns {Promise<any>} Country data.
 * @throws {Error} If the API call fails.
 */
export const fetchCountryByCode = async (code: string): Promise<any> => {
  try {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    console.log(`Fetching country data by code from URL: ${url}`);

    // Fetch data from REST Countries API
    const { data } = await axios.get<any[]>(url);

    // REST Countries API returns an array, return the first element
    return data[0];
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error(`[Error] fetchCountryByCode: ${errorMessage}`);
    throw new Error(`Failed to fetch country with code "${code}".`);
  }
};