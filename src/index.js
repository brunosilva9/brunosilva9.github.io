import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "semantic-ui-css/semantic.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import global_en from './assets/translations/en/global.json'
import global_es from './assets/translations/es/global.json'


i18next.init({
  interpolation: { escapeValue: false },
  lng:"es",
  resources: {
    en: {
      global: global_en
    },
    es: {
      global: global_es
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
