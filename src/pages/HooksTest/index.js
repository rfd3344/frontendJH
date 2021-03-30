/* eslint-disable */

import React from "react";
import { render } from "react-dom";
import { connect, Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware, { delay } from "redux-saga";
import { takeLatest, put, call } from "redux-saga/effects";

const ACTION1 = "ACTION1";
const ACTION2 = "ACTION2";
let ONE = 0;
let TWO = 0;

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case ACTION1:
      return { ...state, one: action.payload };
    case ACTION2:
      return { ...state, two: action.payload };
  }
};

const oneSaga = function*(action) {
  yield call(delay, 500);
  yield put({ type: ACTION2, payload: action.payload });
};

const saga = function*() {
  yield takeLatest(ACTION1, oneSaga);
};

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(saga);

const Output = connect(state => ({ one: state.one, two: state.two }), {
  doOne: payload => ({ type: ACTION1, payload }),
  doTwo: payload => ({ type: ACTION2, payload })
})(({ one, two, doOne, doTwo }) => (
  <div>
    <button type="button" onClick={() => doOne("a" + ONE++)}>
      one
    </button>
    <button type="button" onClick={() => doTwo("b" + TWO++)}>
      two
    </button>
    <div>ONE: {one}</div>
    <div>TWO: {two}</div>
  </div>
));

export default App = () => (
  <Provider store={store}>
    <Output />
  </Provider>
);
