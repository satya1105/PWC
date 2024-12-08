

import axios from 'axios';

// const api = axios.create({
//   // baseURL: 'http://localhost:3001', // Backend URL
//   baseURL: 'https://country-dashboard-backend.vercel.app/api',
// });

import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001', // Fallback to local backend if not set
});

export default api;

export const getCountryDetails = (code: string) => api.get(`/countries/${code}`);
export const getCountries = () => api.get('/countries');