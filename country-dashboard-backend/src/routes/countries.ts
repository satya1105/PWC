// // import express from 'express';
// // import {
// //   getAllCountries,
// //   getCountryByCode,
// //   getCountriesByRegion,
// //   searchCountries,
// // } from '../controllers/countriesController';

// // const router = express.Router();

// // router.get('/', getAllCountries); // All countries
// // router.get('/:code', getCountryByCode); // Country by code
// // router.get('/region/:region', getCountriesByRegion); // Countries by region
// // router.get('/search', searchCountries); // Search countries

// // export default router;


// // import express from 'express';
// // import {
// //   getAllCountries,
// //   getCountryByCode,
// //   getCountriesByRegion,
// //   searchCountries,
// // } from '../controllers/countriesController';

// // const router = express.Router();

// // /**
// //  * Route to fetch all countries.
// //  * GET /countries
// //  */
// // router.get('/countries', getAllCountries);

// // /**
// //  * Route to fetch a specific country by its code.
// //  * GET /countries/:code
// //  */
// // router.get('/countries/:code', getCountryByCode);

// // /**
// //  * Route to fetch countries by region.
// //  * GET /countries/region/:region
// //  */
// // router.get('/countries/region/:region', getCountriesByRegion);

// // /**
// //  * Route to search for countries.
// //  * GET /countries/search
// //  */
// // router.get('/countries/search', searchCountries);

// // export default router;


// import express from 'express';
// import {
//   getAllCountries,
//   getCountryByCode,
//   getCountriesByRegion,
//   searchCountries,
// } from '../controllers/countriesController';

// const router = express.Router();

// /**
//  * Fetch all countries.
//  * @route GET /api/countries
//  * @access Public
//  */
// router.get('/api/countries', getAllCountries);

// /**
//  * Fetch a specific country by its code.
//  * @route GET /api/countries/:code
//  * @param {string} code - Country code (ISO 3166-1 alpha-2 or alpha-3)
//  * @access Public
//  */
// router.get('/api/countries/:code', getCountryByCode);

// /**
//  * Fetch countries by region.
//  * @route GET /api/countries/region/:region
//  * @param {string} region - Region name
//  * @access Public
//  */
// router.get('/api/countries/region/:region', getCountriesByRegion);

// /**
//  * Search for countries by various criteria.
//  * @route GET /api/countries/search
//  * @query {string} name - Search by name (partial match)
//  * @query {string} region - Filter by region
//  * @query {string} capital - Filter by capital
//  * @query {string} timezone - Filter by timezone
//  * @access Public
//  */
// router.get('/api/countries/search', searchCountries);

// export default router;

import express from 'express';
import {
  getAllCountries,
  getCountryByCode,
  getCountriesByRegion,
  searchCountries,
} from '../controllers/countriesController';

const router = express.Router();

/**
 * @route GET /api/countries
 * @description Fetch all countries.
 * @access Public
 */
router.get('/api/countries', getAllCountries);

/**
 * @route GET /api/countries/:code
 * @description Fetch a specific country by its code.
 * @param {string} code - Country code (ISO 3166-1 alpha-2 or alpha-3)
 * @access Public
 */
router.get('/api/countries/:code', getCountryByCode);

/**
 * @route GET /api/countries/region/:region
 * @description Fetch countries by region.
 * @param {string} region - Region name (e.g., Africa, Europe)
 * @access Public
 */
router.get('/api/countries/region/:region', getCountriesByRegion);

/**
 * @route GET /api/countries/search
 * @description Search for countries by various criteria.
 * @query {string} name - Search countries by name (partial match)
 * @query {string} region - Filter by region (e.g., Africa, Europe)
 * @query {string} capital - Filter by capital
 * @query {string} timezone - Filter by timezone
 * @access Public
 */
router.get('/api/countries/search', searchCountries);

export default router;