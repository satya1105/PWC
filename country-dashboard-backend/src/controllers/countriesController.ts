import { Request, Response } from 'express';
import { fetchAllCountries, fetchCountryByCode } from '../services/restCountriesAPI';
import { getCache, setCache } from '../services/cacheService';

export const getAllCountries = async (req: Request, res: Response) => {
  try {
    const cacheKey = 'allCountries';
    const cachedData = getCache(cacheKey);

    if (cachedData) {
      return res.json(cachedData);
    }

    const countries = await fetchAllCountries();
    setCache(cacheKey, countries);
    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch countries' });
  }
};

export const getCountryByCode = async (req: Request, res: Response) => {
  try {
    const { code } = req.params;
    const country = await fetchCountryByCode(code);
    res.json(country);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch country details' });
  }
};