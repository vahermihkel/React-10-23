import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

// Navigeerimiseks:
// 1. installeerida moodul node_modules kausta: npm install react-router-dom
// 2. lisada BrowserRouter tag App tagi ümber
// 3. App.js failis defineerida seosed URLi ja sisu vahel

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
