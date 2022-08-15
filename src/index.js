import React from 'react';
import ReactDOM from 'react-dom/client';
import Cabecalho from './header/Cabecalho';
import './index.css';
import Cadastro from './main/Cadastro';
import Resultado from './main/Resultado';
import Noticias from './main/Noticias';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Cabecalho/>
    <Noticias/>
    <Cadastro/>
    <Resultado/>
  </React.Fragment>
);

reportWebVitals();
