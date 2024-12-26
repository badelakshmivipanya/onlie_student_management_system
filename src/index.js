
import React from 'react';
import ReactDOM from 'react-dom/client';  // Use this for React 18+
import './styles.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
