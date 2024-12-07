import { Request, Response, NextFunction } from 'express';
import { errorHandler } from '../../src/utils/errorHandler';

describe('Error Handler', () => {
    it('should handle errors and return a JSON response', () => {
        const mockError = new Error('Test error');
        const mockRequest = {} as Request;
        const mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        } as unknown as Response;
        const mockNext = jest.fn();

        errorHandler(mockError, mockRequest, mockResponse, mockNext);

        expect(mockResponse.status).toHaveBeenCalledWith(500);
        expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Test error' });
    });
});