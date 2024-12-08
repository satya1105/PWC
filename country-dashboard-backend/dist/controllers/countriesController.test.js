"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const countriesController = __importStar(require("../../src/controllers/countriesController"));
const countryService = __importStar(require("../../src/services/countryService"));
jest.mock('../../src/services/countryService');
describe('Countries Controller', () => {
    let mockRequest;
    let mockResponse;
    let mockNext;
    beforeEach(() => {
        mockRequest = {};
        mockResponse = {
            json: jest.fn(),
        };
        mockNext = jest.fn();
    });
    describe('getAllCountries', () => {
        it('should return all countries on success', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockCountries = [{ name: 'India' }, { name: 'USA' }];
            countryService.fetchAllCountries.mockResolvedValue(mockCountries);
            yield countriesController.getAllCountries(mockRequest, mockResponse, mockNext);
            expect(countryService.fetchAllCountries).toHaveBeenCalled();
            expect(mockResponse.json).toHaveBeenCalledWith(mockCountries);
        }));
        it('should call next with error on failure', () => __awaiter(void 0, void 0, void 0, function* () {
            const error = new Error('Failed to fetch countries');
            countryService.fetchAllCountries.mockRejectedValue(error);
            yield countriesController.getAllCountries(mockRequest, mockResponse, mockNext);
            expect(mockNext).toHaveBeenCalledWith(error);
        }));
    });
    describe('getCountryByCode', () => {
        it('should return a country by code', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockCountry = { name: 'India', code: 'IN' };
            countryService.fetchCountryByCode.mockResolvedValue(mockCountry);
            mockRequest = { params: { code: 'IN' } };
            yield countriesController.getCountryByCode(mockRequest, mockResponse, mockNext);
            expect(countryService.fetchCountryByCode).toHaveBeenCalledWith('IN');
            expect(mockResponse.json).toHaveBeenCalledWith(mockCountry);
        }));
    });
    // Additional test cases for `getCountriesByRegion` and `searchCountries`...
});
