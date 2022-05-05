import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/responsive.css';
import './assets/slicknav.min.css';
import './assets/style.css';

import './assets/css/animate/animate.min.css';
import './assets/css/owlcarousel/assets/owl.carousel.min.css';
import './assets/css/lightbox/css/lightbox.min.css';
import './assets/css/ionicons/css/ionicons.min.css';
import './assets/css/bootstrap/css/bootstrap.min.css';
import './assets/css/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
