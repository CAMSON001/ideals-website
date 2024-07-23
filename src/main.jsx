import React from 'react';
import ReactDOM from 'react-dom'; 
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <App />
      </React.Suspense>
    </BrowserRouter>
  </HelmetProvider>
);

