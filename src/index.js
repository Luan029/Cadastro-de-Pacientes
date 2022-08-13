import React from 'react';
import ReactDOM from 'react-dom/client';
import Cabecalho from './header/Cabecalho';
import './index.css';
import Noticias from './main/Noticias';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Cabecalho/>
    <Noticias/>
  </React.Fragment>
);

reportWebVitals();
