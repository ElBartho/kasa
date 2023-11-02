import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './utils/style/GlobalStyle';
import AllRoutes from './AllRoutes';
import Footer from './components/Footer';

import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <AllRoutes />
      <Footer />
    </Router>
  </React.StrictMode>
);
