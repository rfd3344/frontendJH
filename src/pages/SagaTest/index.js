/* eslint-disable */
import React from "react";
import { render } from "react-dom";
import { connect, Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware, { delay } from "redux-saga";
import { takeLatest, put, call, apply, fork, take } from "redux-saga/effects";

const ACTION1 = "ACTION1";
const ACTION2 = "ACTION2";
let ONE = 0;
let TWO = 0;

const initialState = {
	one: 'a',
	two: 'b',
};

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

const delayS = (seconds) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(seconds);
		}, seconds * 1000)
	})
}

const oneSaga = function*(action) {
	console.warn('rfd called oneSaga', action)
  // yield call(delay, 500);

  // yield put({ type: ACTION2, payload: action.payload });
};

const twoSaga = function*(action) {
	console.warn('rfd called twoSaga', action)

	yield delayS(4);
  // yield call(delay, 500);
  // yield call( delayS(1) );
  // yield put({ type: ACTION1, payload: action.payload });
};
console.warn('call ', call(()=> {}))
console.warn('fork ', fork(()=> {}))

const takeExam = function*() {
	while (true) {
	  yield take(ACTION2);
	 yield twoSaga()
	   console.warn('after')
		yield take(ACTION1);
	   yield call(oneSaga)
   }
}
const saga = function*() {
  // yield takeLatest(ACTION1, oneSaga);
 	yield fork(takeExam);
	 yield takeLatest(ACTION1, oneSaga);
 //  while (true) {
	//   console.warn('back')
 //   yield take(ACTION2);
 //   yield call(twoSaga)
 //   	  console.warn('after')
 //   yield takeLatest(ACTION1, oneSaga);
 // }



  // yield takeLatest(ACTION2, twoSaga);
};

const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware)
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

const App = () => (
  <Provider store={store}>
    <Output />
  </Provider>
);


export default App;
// function SagaTest() {
// 	return (
// 		<Provider store={store}>
// 	      <Output />
// 	    </Provider>
// 	);
// }
