import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/films/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
