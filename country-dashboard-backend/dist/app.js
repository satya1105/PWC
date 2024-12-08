"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const countries_1 = __importDefault(require("./routes/countries"));
const errorHandler_1 = require("./utils/errorHandler");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/countries', countries_1.default);
app.use(errorHandler_1.errorHandler);
exports.default = app;
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
