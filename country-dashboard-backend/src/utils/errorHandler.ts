import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
};

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number = 500) {
      super(message);
      this.status = status;
  }
}
