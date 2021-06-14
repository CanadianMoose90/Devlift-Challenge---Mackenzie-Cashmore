import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { FirebaseAppProvider } from 'reactfire';


const firebaseConfig = {
  apiKey: "AIzaSyASyRbVGJ_AWuI50zVZU0nwLDRC2N8ljnw",
  authDomain: "devlift-challenge-db.firebaseapp.com",
  databaseURL: "https://devlift-challenge-db-default-rtdb.firebaseio.com",
  projectId: "devlift-challenge-db",
  storageBucket: "devlift-challenge-db.appspot.com",
  messagingSenderId: "296234352559",
  appId: "1:296234352559:web:f03a6c1f9a6ad85ecaf95a"
};

  ReactDOM.render(
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>,
    document.getElementById('root')
  );
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

