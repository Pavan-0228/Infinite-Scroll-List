import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Adjust the path if needed
import { ThemeProvider } from './ThemeContext'; // Adjust the path if needed
import './styles.css'; // Import your global styles

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
