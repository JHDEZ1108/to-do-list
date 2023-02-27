import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/index.jsx';
import './index.css';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <App />
);

