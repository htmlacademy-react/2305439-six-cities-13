import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Setting = {
  rentalOffer: 312,
} as const;

root.render(

  <React.StrictMode>
    <App rentalOffer={Setting.rentalOffer} />
  </React.StrictMode>

);
