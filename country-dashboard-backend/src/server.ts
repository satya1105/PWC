// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import countriesRouter from './routes/countries';

// // Load environment variables
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/countries', countriesRouter);

// // Server startup
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import countriesRouter from './routes/countries';

// // Load environment variables
// dotenv.config();

// // Initialize Express application
// const app = express();

// // Define server port
// const PORT = process.env.PORT || 3001;

// // Middleware configuration
// app.use(cors()); // Enable Cross-Origin Resource Sharing
// app.use(express.json()); // Parse incoming JSON requests

// // Register API routes
// app.use('/api/countries', countriesRouter); // Country-related endpoints

// // Start the server
// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on http://localhost:${PORT}`);
// });

// export default app;


import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import countriesRouter from './routes/countries';

// Load environment variables
dotenv.config();

// Initialize Express application
const app = express();

// Define server port
const PORT = process.env.PORT || 3001;

// Middleware configuration
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Logging middleware (optional for development)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Register API routes
app.use('/api/countries', countriesRouter); // Country-related endpoints

// Error handling middleware (optional for better error management)
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(`[Error] ${err.message}`);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

export default app;