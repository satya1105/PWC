// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:3001', // Backend API URL
// });

// export const getCountries = () => api.get('/countries');
// export const getCountryDetails = (code: string) => api.get(`/countries/${code}`);

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Backend URL
});

export const getCountries = () => api.get('/countries');