import { Request, Response, NextFunction } from 'express';
import * as countriesController from '../../src/controllers/countriesController';
import * as countryService from '../../src/services/countryService';

jest.mock('../../src/services/countryService');

describe('Countries Controller', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let mockNext: NextFunction;

    beforeEach(() => {
        mockRequest = {};
        mockResponse = {
            json: jest.fn(),
        };
        mockNext = jest.fn();
    });

    describe('getAllCountries', () => {
        it('should return all countries on success', async () => {
            const mockCountries = [{ name: 'India' }, { name: 'USA' }];
            (countryService.fetchAllCountries as jest.Mock).mockResolvedValue(mockCountries);

            await countriesController.getAllCountries(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(countryService.fetchAllCountries).toHaveBeenCalled();
            expect(mockResponse.json).toHaveBeenCalledWith(mockCountries);
        });

        it('should call next with error on failure', async () => {
            const error = new Error('Failed to fetch countries');
            (countryService.fetchAllCountries as jest.Mock).mockRejectedValue(error);

            await countriesController.getAllCountries(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(mockNext).toHaveBeenCalledWith(error);
        });
    });

    describe('getCountryByCode', () => {
        it('should return a country by code', async () => {
            const mockCountry = { name: 'India', code: 'IN' };
            (countryService.fetchCountryByCode as jest.Mock).mockResolvedValue(mockCountry);

            mockRequest = { params: { code: 'IN' } };

            await countriesController.getCountryByCode(
                mockRequest as Request,
                mockResponse as Response,
                mockNext
            );

            expect(countryService.fetchCountryByCode).toHaveBeenCalledWith('IN');
            expect(mockResponse.json).toHaveBeenCalledWith(mockCountry);
        });
    });

    // Additional test cases for `getCountriesByRegion` and `searchCountries`...
});