# Andean Coffeehouse
Database Design & Management Project | Spring 2024

## Tech Stack 
- React (JavaScript)
- Tailwind CSS
- PHP
- MariaDB (MySQL)
- XAMPP

## Setup
### Prerequisites
- XAMPP
- MariaDB/MySQL
- npm 

### Frontend
1. Navigate to project folder `cd andean-coffeehouse`
2. Run `npm install`
3. Run `npm install -D tailwindcss`
4. Run `npx tailwindcss init -p`
3. Run `npm run dev` and go to **http://localhost:5173**

### Backend & Database
    1. Navigate to your XAMPP installation directory and start the Apache and MySQL services.
    2. Clone the `/api` directory into the htdocs directory of your XAMPP installation.
    3. Navigate to *https://localhost/phpmyadmin/* in your web browser as the root user.
    3. Run the provided SQL queries in the `/queries` directory into your MariaDB/MySQL server in PHPMyAdmin.

### Project Structure
    - api/: Contains the PHP files responsible for handling backend logic and serving API endpoints.
    - queries/: Contains the SQL queries required to replicate the project.
    - src/: Holds the React components/logic for the frontend and houses the static assets like images accessible to the frontend.
    - tailwind.config.js: Configuration file for Tailwind CSS.