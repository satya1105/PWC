import express from 'express';
import { getAllCountries, getCountryByCode } from '../controllers/countriesController';

const router = express.Router();

router.get('/', getAllCountries);          // GET /countries
router.get('/:code', getCountryByCode);    // GET /countries/:code

export default router;