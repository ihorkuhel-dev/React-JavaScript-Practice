# React-JavaScript-Practice

This project is a React-based frontend application designed as a dashboard/CRM interface. It implements modern frontend architecture practices, utilizing Feature-Sliced Design (FSD) for scalable and maintainable code structure.

## Brief Functionality

The application provides a comprehensive user interface for managing business data:

*   **Authentication:** User login and registration flows with token management.
*   **Dashboard:** A visual overview of key metrics using interactive charts (powered by Chart.js).
*   **Client Management:** 
    *   View a table/list of clients.
    *   Detailed view for individual client cards.
*   **Product Management:** View and manage product information.
*   **State Management:** Robust data fetching and state synchronization using Redux Toolkit and RTK Query.
*   **Toast Notifications:** User feedback system for actions and errors.

## List of Dependencies

The project relies on a modern JavaScript stack, built and bundled with Webpack 5.

**Core Dependencies:**
*   **React** (`^19.2.5`): UI library for building component-driven interfaces.
*   **Redux Toolkit & React-Redux** (`^2.11.2`, `^9.2.0`): Global state management and API data fetching (RTK Query).
*   **React Router** (`^7.14.0`): Declarative routing for single-page applications.
*   **Chart.js & React-Chartjs-2** (`^4.5.1`, `^5.3.1`): Interactive data visualization.
*   **JS-Cookie** (`^3.0.5`): Simplified cookie manipulation for auth tokens.

**Selected Dev Dependencies:**
*   **Webpack 5** (`^5.106.0`): Module bundler.
*   **Babel** (`^7.29.0`): JavaScript compiler for backwards compatibility.
*   **Sass** (`^1.99.0`): CSS preprocessor for advanced styling capabilities.
*   Plugins: `html-webpack-plugin`, `mini-css-extract-plugin`, `css-minimizer-webpack-plugin`.

## Startup Instructions

Follow these steps to get the project running on your local machine:

**1. Clone the repository**
```bash
git clone https://github.com/ihorkuhel-dev/React-JavaScript-Practice.git
cd React-JavaScript-Practice
```

**2. Install all dependencies**
Make sure you have Node.js and npm installed. Run the following command in the project root folder:
```bash
npm install
```

**3. Run the development server**
To start the app in development mode with hot-reloading:
```bash
npm start
```
*This command runs Webpack dev server. The application will automatically open in your default browser.*

**4. Build for production**
To create an optimized production build in the `dist` folder:
```bash
npm run build
```
