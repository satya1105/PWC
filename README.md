# PWC
Country Data Dashboard 
Introduction

This project aims to build a web application that displays information about countries sourced from the REST Countries API. The project includes backend APIs for data retrieval and a frontend interface for user interaction.

Technologies Used

Backend: Node.js, Express, TypeScript
Frontend: React/Next.js, TypeScript
Project Setup

Clone the Repository:

Bash
git clone https://github.com/your-username/country-data-dashboard.git
Use code with caution.

Install Dependencies:

Bash
cd country-data-dashboard
npm install
Use code with caution.

Running the Application

Start the Backend:

Bash
npm run start:backend
Use code with caution.

Start the Frontend:

Bash
npm run start:frontend
Use code with caution.

Backend API Endpoints

GET /countries: Fetches a list of all countries.
GET /countries/code/:code: Fetches detailed information about a single country by its code (e.g., "US" for the United States).
GET /countries/region/:region: Filters countries by region (e.g., "Asia", "Europe").
GET /countries/search: Searches for countries by name, capital city, region, or timezone.

Test API's like below
GET all countries: http://localhost:3000/countries
GET countries by code: http://localhost:3000/countries/IN
GET countries by region: http://localhost:3000/countries/region/Asia
GET countries by searching: http://localhost:3000/countries/search?name=India

Frontend Features

Home Page: Displays a list of all countries.
Country Details Page: Shows detailed information about a specific country.
Search Functionality: Allows users to search for countries by various criteria.
Caching: Implements caching to reduce the number of API requests.
Error Handling: Handles API errors gracefully.
