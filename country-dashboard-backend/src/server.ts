// import app from './app';
// import dotenv from 'dotenv';

// dotenv.config();

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// import express from 'express';
// import cors from 'cors';
// import { config } from 'dotenv'; // Import the `config` method from dotenv

// // Load environment variables
// config();

// // Initialize the Express app
// const app = express();

// // Set the port from the environment variables or use the default value
// const PORT = process.env.PORT || 3001;

// // Middleware
// app.use(cors()); // Enable Cross-Origin Resource Sharing
// app.use(express.json()); // Parse JSON request bodies

// // Routes
// app.get('/', (req, res) => {
//   res.status(200).send('Server is running!');
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import countriesRouter from './routes/countries';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/countries', countriesRouter);

// Root Route
app.get('/', (req, res) => {
  res.send('Country Dashboard Backend is running!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});