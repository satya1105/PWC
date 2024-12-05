import express from 'express';
import cors from 'cors';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

export default app;

// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import countriesRouter from './routes/countries';

// // Load environment variables from .env file
// dotenv.config();

// // Initialize the Express application
// const app = express();

// // Define the server port
// const PORT = process.env.PORT || 3001;

// // Middleware setup
// app.use(cors()); // Enable Cross-Origin Resource Sharing
// app.use(express.json()); // Parse incoming JSON payloads

// // API Routes
// app.use('/api/countries', countriesRouter); // Country-related routes

// // Start the server
// app.listen(PORT, () => {
//   console.log(`🚀 Server is running at http://localhost:${PORT}`);
// });

// export default app;