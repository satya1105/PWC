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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../src/app"));
jest.mock('../../src/services/countryService', () => ({
    fetchAllCountries: jest.fn(() => Promise.resolve([{ name: 'India' }])),
    fetchCountryByCode: jest.fn((code) => Promise.resolve({ name: 'India', code })),
}));
describe('Countries Routes', () => {
    it('GET /countries should return all countries', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/countries');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([{ name: 'India' }]);
    }));
    it('GET /countries/:code should return a country by code', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/countries/IN');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ name: 'India', code: 'IN' });
    }));
    // Additional test cases for `/region/:region` and `/search`...
});
