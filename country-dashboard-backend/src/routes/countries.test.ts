import request from 'supertest';
import app from '../../src/app';

jest.mock('../../src/services/countryService', () => ({
    fetchAllCountries: jest.fn(() => Promise.resolve([{ name: 'India' }])),
    fetchCountryByCode: jest.fn((code) => Promise.resolve({ name: 'India', code })),
}));

describe('Countries Routes', () => {
    it('GET /countries should return all countries', async () => {
        const response = await request(app).get('/countries');

        expect(response.status).toBe(200);
        expect(response.body).toEqual([{ name: 'India' }]);
    });

    it('GET /countries/:code should return a country by code', async () => {
        const response = await request(app).get('/countries/IN');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ name: 'India', code: 'IN' });
    });

    // Additional test cases for `/region/:region` and `/search`...
});