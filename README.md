# Thagana Technologies - Test Project

Welcome to the Thagana test project. This project demonstrates modern web development techniques using Vue.js, Quasar, and IndexedDB. The application includes various data visualizations, user management, and a responsive design.

## Project Overview

This project includes:

1. Bar Chart: A page that renders a bar chart using data from `barGraph.json`.
2. Pie Chart: A page that displays a pie chart using data from `pieChart.json`.
3. User Management: A page that displays a dynamic data table with search, pagination, and filtering options using data from `users.json`. Includes CRUD operations with IndexedDB.
4. Responsive Design: Ensures the application is visually appealing and functional across different screen sizes.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Vue CLI](https://cli.vuejs.org/)
- [Quasar CLI](https://quasar.dev/start/installation)

## Installation

1. Clone the Repository

   ```bash
   git clone https://github.com/Uyapfa/QuasarProject
   cd quasar-project
   ```

2. Install Dependencies

   ```bash
   yarn
   ```

## Running the Project

1. Start the Development Server

   ```bash
   quasar dev
   ```

   This command starts the development server and opens the application in your default web browser.

2. Build for Production

   ```bash
   quasar build
   ```

   This command builds the application for production and outputs the files into the `dist/` directory.

## File Structure

- `src/components`: Contains reusable Vue components.
- `src/pages`: Contains Vue components for different pages.
- `src/layouts`: Contains layout components for the application.
- `public`: Contains static assets such as JSON files (`barGraph.json`, `pieChart.json`, `users.json`).

## Features

### 1. Bar Chart Page

- Description: Renders a bar chart using data from `barGraph.json`.
- Data: Includes months and installation numbers.

### 2. Pie Chart Page

- Description: Displays a pie chart using data from `pieChart.json`.
- Data: Includes years and installation numbers.

### 3. User Management Page

- Description: Displays a table of users from `users.json`.
- Features:
  - Search: Allows searching by user name.
  - Pagination: Enables navigation through pages of data.
  - Filtering: Filters users by designation.
  - CRUD Operations: Add, update, and delete user records using IndexedDB.

### 4. IndexedDB Integration

- Functionality: Adds, updates, and deletes user records in IndexedDB to ensure data persistence across browser sessions.

### 5. Responsive Design

- Description: The application adapts to different screen sizes, ensuring a user-friendly experience on both desktop and mobile devices.

## Instructions for Running Locally

1. Ensure JSON Files Are in the `public` Directory

   Place the following JSON files in the `public` directory:

   - `public/barGraph.json`
   - `public/pieChart.json`
   - `public/users.json`

2. **Run the Development Server**

   ```bash
   quasar dev
   ```

   Open your web browser and navigate to `http://localhost:9000` to view the application.

3. Testing

   - Bar Chart: Navigate to the Bar Chart page to view the chart rendered from `barGraph.json`.
   - Pie Chart: Navigate to the Pie Chart page to view the chart rendered from `pieChart.json`.
   - User Management: Navigate to the User Management page to interact with the data table and perform CRUD operations.


## Contact

For questions or feedback, please reach out to uyapfa.clive@gmail.com.
