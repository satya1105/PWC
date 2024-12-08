"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler_1 = require("../../src/utils/errorHandler");
describe('Error Handler', () => {
    it('should handle errors and return a JSON response', () => {
        const mockError = new Error('Test error');
        const mockRequest = {};
        const mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        const mockNext = jest.fn();
        (0, errorHandler_1.errorHandler)(mockError, mockRequest, mockResponse, mockNext);
        expect(mockResponse.status).toHaveBeenCalledWith(500);
        expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Test error' });
    });
});
