import { Request, Response, NextFunction } from 'express';
import * as countryService from '../services/countryService';

export const getAllCountries = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const countries = await countryService.fetchAllCountries();
        res.json(countries);
    } catch (err) {
        next(err);
    }
};

export const getCountryByCode = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const country = await countryService.fetchCountryByCode(req.params.code);
        res.json(country);
    } catch (err) {
        next(err);
    }
};

export const getCountriesByRegion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const countries = await countryService.fetchCountriesByRegion(req.params.region);
        res.json(countries);
    } catch (err) {
        next(err);
    }
};

export const searchCountries = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, capital, region, timezone } = req.query;
        const results = await countryService.searchCountries({ name, capital, region, timezone });
        res.json(results);
    } catch (err) {
        next(err);
    }
};
