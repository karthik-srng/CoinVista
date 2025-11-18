
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CoinProvider } from './context/CoinContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <CoinProvider>
      <App />
    </CoinProvider>
  </React.StrictMode>
);
