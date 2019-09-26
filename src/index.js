
import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Routers from './routers.js'
import rootReducer from './reducers.js'
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById('root')
);
