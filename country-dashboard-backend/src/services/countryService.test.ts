import axios from 'axios';
import * as countryService from '../../src/services/countryService';
import cache from '../../src/utils/cache';

jest.mock('axios');
jest.mock('../../src/utils/cache');

describe('Country Service', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('fetchAllCountries', () => {
        it('should return cached data if available', async () => {
            const mockData = [{ name: 'India' }];
            (cache.get as jest.Mock).mockReturnValue(mockData);

            const result = await countryService.fetchAllCountries();

            expect(cache.get).toHaveBeenCalledWith('allCountries');
            expect(result).toEqual(mockData);
        });

        it('should fetch and cache data if not in cache', async () => {
            const mockData = [{ name: 'India', region: 'Asia' }];
            (cache.get as jest.Mock).mockReturnValue(null);
            (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

            const result = await countryService.fetchAllCountries();

            expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/all?fields='));
            expect(cache.set).toHaveBeenCalledWith('allCountries', mockData);
            expect(result).toEqual(mockData);
        });
    });

    // Additional test cases for `fetchCountryByCode`, `fetchCountriesByRegion`, and `searchCountries`...
});