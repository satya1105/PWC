"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cache_1 = __importDefault(require("../../src/utils/cache"));
describe('Cache Utility', () => {
    it('should set and get a value in cache', () => {
        cache_1.default.set('key', 'value');
        const result = cache_1.default.get('key');
        expect(result).toBe('value');
    });
});
