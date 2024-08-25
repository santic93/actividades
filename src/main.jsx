import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'rsuite/dist/rsuite.min.css';
import { CustomProvider } from 'rsuite';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CustomProvider theme='dark'>
        <App />
      </CustomProvider>
    </BrowserRouter>
  </StrictMode>
);
