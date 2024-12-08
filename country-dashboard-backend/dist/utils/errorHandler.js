"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
};
exports.errorHandler = errorHandler;
class ApiError extends Error {
    constructor(message, status = 500) {
        super(message);
        this.status = status;
    }
}
exports.ApiError = ApiError;
