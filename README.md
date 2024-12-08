Country Dashboard - Compare Countries Application

This project is a   enables users to compare two countries based on a variety of data retrieved from the REST Countries API. The application consists of a frontend built with React/Next.js and TypeScript and a backend implemented using Node.js, Express, and TypeScript. It includes features like filtering, searching, and lazy loading to enhance usability. A CI/CD pipeline is set up using GitHub Actions, and the application is hosted on Vercel.

Features
	•	Country Comparison: Users can select and compare two countries side by side.
	•	Search and Filters:
	•	Search countries by name or capital city.
	•	Filter countries by region, timezone, or other criteria.
	•	Dynamic Loading:
	•	Lazy-loading with infinite scroll for smooth performance.
	•	Batch loading of country data.
	•	Country List Page:
	•	Displays country details (name, flag, region) in a card layout.
	•	Shows the current local time of each country.
	•	Country Detail Page:
	•	Provides detailed information like population, currency, languages, and region.
	•	Responsive UI/UX:
	•	Built with a CSS framework for responsiveness.
	•	Includes loading and error states for enhanced user experience.
	•	Backend Caching: Reduces external API calls for better performance.
	•	Testing and CI/CD:
	•	Test coverage for backend using Jest.
	•	GitHub Actions pipeline for CI/CD automation.

Getting Started

Step 1: Clone the Repository

git clone https://github.com/your-username/your-repo.git
cd your-repo

Step 2: Install Dependencies

Navigate to both the frontend and backend directories and install the required packages:

For Frontend:

cd country-dashboard-frontend
npm install

For Backend:

cd ../country-dashboard-backend
npm install

Step 3: Run the Application

Start both the frontend and backend servers.

1. Frontend:

cd country-dashboard-frontend
npm run dev

The frontend will run on http://localhost:3000.

2. Backend:

cd ../country-dashboard-backend
npm run dev

The backend will run on http://localhost:3001.

Step 4: Test Backend Coverage

Run tests and generate a coverage report for the backend:

cd country-dashboard-backend
npx jest --coverage

The coverage report will show the percentage of tested backend code.

Deployment

The application uses GitHub Actions for CI/CD. When changes are pushed to the repository, the pipeline automatically:
	1.	Builds and tests the frontend and backend.
	2.	Deploys both services to Vercel.

Technology Stack
	•	Frontend: Next.js (React framework) with TypeScript
	•	Backend: Node.js, Express, and TypeScript
	•	Styling: Tailwind CSS or Material-UI for responsive design
	•	Testing: Jest for backend testing
	•	CI/CD: GitHub Actions
	•	Hosting: Vercel

How It Works
	1.	Users can compare two countries using filters and search features.
	2.	The frontend communicates with the backend APIs to fetch country data from the REST Countries API.
	3.	The backend implements caching for better performance and reduces API calls.
	4.	The application displays data dynamically with lazy-loading and responsive design.



Author

satya prakash ranjan
