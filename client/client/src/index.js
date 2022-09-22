import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider } from 'react-redux'
import { legacy_createStore , applyMiddleware , compose } from 'redux'
import thunk from 'redux-thunk'
import Reducers from '../src/reducers/index.js'


const store = legacy_createStore(Reducers , compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

reportWebVitals();
