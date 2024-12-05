import express from 'express';
import cors from 'cors';
import countriesRouter from './routes/countries';
import { errorHandler } from './utils/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/countries', countriesRouter);
app.use(errorHandler);

export default app;