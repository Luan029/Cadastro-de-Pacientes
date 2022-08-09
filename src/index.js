import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Noticias from './main/Noticias';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <div>
      <h1>Hospital</h1>
    </div>
    <Noticias/>
  </React.Fragment>
);

reportWebVitals();
