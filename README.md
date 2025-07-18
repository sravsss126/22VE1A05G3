# 22VE1A05G3

Frontend Project

This project is a React application built with Vite. 

Dependencies

This project uses the following key dependencies:

React: A JavaScript library for building user interfaces.

React DOM: Provides the DOM-specific methods that can be used at the top level of your web app.

React Router DOM: Declarative routing for React.

Axios: Promise-based HTTP client for the browser and Node.js.

@emotion/react & @emotion/styled: Libraries for writing CSS with JavaScript.

@mui/material: React components for faster and easier web development.

Development
To start the development server, run:

npm install
npm run dev

This will open your application in development mode, typically at http://localhost:5173. Any changes you make to the source code will be hot-reloaded.


Architecture Overview

 ┌──────────────────────┐
 │      Frontend        │
 │  (React + MUI)       │
 │                      │
 │  Components (e.g.,    │
 │  Formshorter.jsx)    │
 │      │               │
 │      ▼               │
 │   Logger.js          │
 │ (Log function        │
 │  using axios)        │
 └─────────┬────────────┘
           │ POST /logs
           ▼
 ┌──────────────────────┐
 │    Logging API       │
 │ (Evaluation Service) │
 │ http://20.244.56.14/ │
 │   evaluation-service │
 │       /logs          │
 └─────────┬────────────┘
           │
           ▼
 ┌──────────────────────┐
 │    Log Storage       │
 │ (Database/File/Cloud)│
 │ Stores structured    │
 │ logs for analysis    │
 └──────────────────────┘


