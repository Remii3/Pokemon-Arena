import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './styles/css/main.css';

// bs 5 import
import './styles/css/bootstrap.css';
import './styles/css/bootstrap-grid.css';
import './styles/css/bootstrap-reboot.css';
import './styles/css/bootstrap-utilities.css';
import './styles/css/bootstrap.css';
import './functions/bootstrap5';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
