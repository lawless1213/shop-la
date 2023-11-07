import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './data/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(store);
root.render(
  <BrowserRouter basename='/shop-la'>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);