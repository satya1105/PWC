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



// COUNTRY-DASHBOARD-BACKEND/
// ├── src/
// │   ├── controllers/        
// │   │   ├── countriesController.ts
// │   │  
// │   │   
// │   ├── routes/             
// │   │   ├── countries.ts
// │   │   
// │   │  
// │   ├── services/             
// │   │   ├── cacheService.ts
// │   │   └── countryServices.ts
// │   ├── utils/           # Business logic and reusable functions
// │   │   ├── cache.ts
// │   │   └── errorHandler.ts
// │   
// │   ├── app.js              # Express app initialization
// │   └── server.js           # Entry point to start the server

// ├── node_modules/           # Dependencies installed via npm
// ├── .env                    # Environment variables
// ├── package.json            # Project metadata and dependencies
// ├── package-lock.json       # Dependency lock file
// └── README.md               # Project documentation