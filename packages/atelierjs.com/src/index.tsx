import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContextProvider } from './context';

import '@atelierjs/core/dist/css/atelier.css';
import './styles/AvantSans';

import App from './App';
import './index.scss';

const container = document.getElementById('app') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Router>
  </React.StrictMode>
);
