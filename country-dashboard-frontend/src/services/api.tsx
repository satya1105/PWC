

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Backend URL
});

export const getCountryDetails = (code: string) => api.get(`/countries/${code}`);
export const getCountries = () => api.get('/countries');