"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchCountries = exports.fetchCountriesByRegion = exports.fetchCountryByCode = exports.fetchAllCountries = void 0;
const axios_1 = __importDefault(require("axios"));
const cache_1 = __importDefault(require("../utils/cache"));
const BASE_URL = process.env.REST_COUNTRIES_API_URL || 'https://restcountries.com/v3.1';
const fetchAllCountries = () => __awaiter(void 0, void 0, void 0, function* () {
    const cachedData = cache_1.default.get('allCountries');
    if (cachedData)
        return cachedData;
    const { data } = yield axios_1.default.get(`${BASE_URL}/all?fields=name,capital,region,population,flags,languages,borders,area`);
    const processedData = data.map((country) => {
        var _a, _b;
        return ({
            name: country.name.common,
            population: country.population,
            region: country.region,
            capital: ((_a = country.capital) === null || _a === void 0 ? void 0 : _a[0]) || '',
            flag: (_b = country.flags) === null || _b === void 0 ? void 0 : _b.png,
            currency: country.currencies || {},
        });
    });
    cache_1.default.set('allCountries', processedData);
    return processedData;
});
exports.fetchAllCountries = fetchAllCountries;
const fetchCountryByCode = (code) => __awaiter(void 0, void 0, void 0, function* () {
    const cachedData = cache_1.default.get(`country_${code}`);
    if (cachedData)
        return cachedData;
    const { data } = yield axios_1.default.get(`${BASE_URL}/alpha/${code}`);
    cache_1.default.set(`country_${code}`, data);
    return data;
});
exports.fetchCountryByCode = fetchCountryByCode;
const fetchCountriesByRegion = (region) => __awaiter(void 0, void 0, void 0, function* () {
    const cachedData = cache_1.default.get(`region_${region}`);
    if (cachedData)
        return cachedData;
    const { data } = yield axios_1.default.get(`${BASE_URL}/region/${region}`);
    cache_1.default.set(`region_${region}`, data);
    return data;
});
exports.fetchCountriesByRegion = fetchCountriesByRegion;
const searchCountries = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, capital, region, timezone } = filters;
    const allCountries = yield (0, exports.fetchAllCountries)();
    return allCountries.filter((country) => {
        return ((!name || country.name.toLowerCase().includes(name.toLowerCase())) &&
            (!capital || country.capital.toLowerCase().includes(capital.toLowerCase())) &&
            (!region || country.region.toLowerCase() === region.toLowerCase()) &&
            (!timezone || country.timezones.includes(timezone)));
    });
});
exports.searchCountries = searchCountries;
