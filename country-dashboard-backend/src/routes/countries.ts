// import express from 'express';
// import { getAllCountries, getCountryByCode } from '../controllers/countriesController';

// const router = express.Router();

// router.get('/', getAllCountries);          // GET /countries
// router.get('/:code', getCountryByCode);    // GET /countries/:code

// export default router;

import express from 'express';

const router = express.Router();

// Mock country data
const mockCountries = [
  {
    name: 'United States',
    region: 'Americas',
    flag: 'https://flagcdn.com/us.svg',
    timezone: 'America/New_York',
    population: 331893745,
  },
  {
    name: 'India',
    region: 'Asia',
    flag: 'https://flagcdn.com/in.svg',
    timezone: 'Asia/Kolkata',
    population: 1407563842,
  },
];

// GET /countries
router.get('/', (req, res) => {
  res.json(mockCountries);
});

export default router;