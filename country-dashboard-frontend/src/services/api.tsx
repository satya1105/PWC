// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:3001', // Backend API URL
// });

// export const getCountries = () => api.get('/countries');
// export const getCountryDetails = (code: string) => api.get(`/countries/${code}`);

// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:3001', // Backend URL
// });

// export const getCountries = () => api.get('/countries');

import axios from 'axios';

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: 'http://localhost:3001', // Backend URL
});

// Fetch all countries
export const getCountries = () => api.get('/countries');

// Fetch details of a specific country by its code
export const getCountryDetails = (code: string) => api.get(`/countries/${code}`);