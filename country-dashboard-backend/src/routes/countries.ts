import { Router } from 'express';
import {
    getAllCountries,
    getCountryByCode,
    getCountriesByRegion,
    searchCountries,
} from '../controllers/countriesController';

const router = Router();

router.get('/', getAllCountries);
router.get('/search', searchCountries);
router.get('/:code', getCountryByCode);
router.get('/region/:region', getCountriesByRegion);

export default router;
