import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProSidebarProvider } from 'react-pro-sidebar';
import "bulma/css/bulma.css";
import { AuthContextProvider } from './Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProSidebarProvider>
      <AuthContextProvider>
      <App />
      </AuthContextProvider>
    </ProSidebarProvider>
  </React.StrictMode>
);

reportWebVitals();
