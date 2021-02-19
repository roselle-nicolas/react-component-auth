import React from 'react';
import ReactDOM from 'react-dom';
// materialize
// import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Si vous souhaitez commencer à mesurer les performances dans votre application, passez une fonction
// pour consigner les résultats (par exemple: reportWebVitals (console.log))
// ou envoyer à un point de terminaison d'analyse.En savoir plus: https://bit.ly/CRA-vitals
reportWebVitals();
