import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import allReducers from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

const store = createStore(allReducers);
//creating store using reducers

ReactDOM.render(
  <Provider store={store}>
    {/* connecting store with app */}
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
