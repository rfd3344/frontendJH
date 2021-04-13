/* eslint-disable */

import React, {
	useState,
	useEffect,
	useReducer,
	useContext,
} from 'react';

import './s.scoped.css';
import Button from './Button';

const MyContext = React.createContext(null);


const Child = ((props = {}) => {
    const { dispatch } = useContext(MyContext);

    return (
        <div>
            <p>step is : {props.step}</p>
            <p>number is : {props.number}</p>
            <p>count is : {props.count}</p>
            <hr />
            <div>
                <button onClick={() => { dispatch({ type: 'stepInc' }) }}>step ++</button>
                <button onClick={() => { dispatch({ type: 'numberInc' }) }}>number ++</button>
                <button onClick={() => { dispatch({ type: 'count' }) }}>number + step</button>
            </div>
        </div>
    );
});

export default (props = {}) => {
	const initState = { count: 0, step: 0, number: 0 };
	const reducer = (state, action) => {
	    switch (action.type) {
	        case 'stepInc': return Object.assign({}, state, { step: state.step + 1 });
	        case 'numberInc': return Object.assign({}, state, { number: state.number + 1 });
	        case 'count': return Object.assign({}, state, { count: state.step + state.number });
	        default: return state;
	    }
	}

    const [state, dispatch] = useReducer(reducer, initState);
    const { step, number, count } = state;

    return (
        <MyContext.Provider value={{ dispatch }}>

						<div> <div>
								<p> yellow </p>
								1111
								</div>
							<Button />
							</div>

        </MyContext.Provider>
    );
}
