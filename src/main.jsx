import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';
import Context from './components/Context';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <ScrollToTop />
        <App />
      </Context>
    </BrowserRouter>
  </React.StrictMode>,
);
