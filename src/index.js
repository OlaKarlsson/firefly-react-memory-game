import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// Register service worker to control making site work offline
if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('/service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }


  

ReactDOM.render(<App />, document.getElementById('root'));

