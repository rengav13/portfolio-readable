import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';

import reducers from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  reducers,
  composeEnhancer(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
