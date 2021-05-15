import React, { createContext } from 'react';
import { ACTIONS, MIN_YAXIS, INITIAL_STATE } from '@/constants/histogram';
import { Bar, State, Action } from '@/schemas/histogram';

// action for Y-Axis Maximun input change
export const changeMaxYAxis = (value = 0) => ({
	type: ACTIONS.CHANGE_YAXIS,
	maxYAxis: value,
});

// action for toggle read-only mode
export const changeReadOnly = (value = false) => ({
	type: ACTIONS.CHANGE_READONLY,
	readOnly: !!value,
});

// action for dragging bar
export const changeBar = (index = 0, value = 0) => ({
	type: ACTIONS.CHANGE_BAR,
	index,
	value,
});


// handle CHANGE_YAXIS action
function doChangeYAxis(state: State, action: Action) {
	const maxValue = state.bars.reduce((acc: number, current: Bar) => {
		return current.value > acc ? current.value : acc;
	}, 0);
	const maxYAxis = Math.max(maxValue, action.maxYAxis, MIN_YAXIS);
	return {
		...state,
		maxYAxis,
	};
}

// handle CHANGE_BAR action
function doChangeBar(state: State, action: Action) {
	return {
		...state,
		bars: state.bars.map((item, index) => {
			if(action.index === index) {
				return {...item, value: action.value};
			}
			return { ...item };
		}),
	}
}

export function histogramReducer(state: State, action: Action) {
	switch(action.type) {
		case ACTIONS.CHANGE_YAXIS:
			return doChangeYAxis(state, action);
		case ACTIONS.CHANGE_READONLY:
			return {
				...state,
				readOnly: action.readOnly,
			}
		case ACTIONS.CHANGE_BAR:
			return doChangeBar(state, action);
		default:
			return state;
	}
}

const HistogramContext = createContext<{
	state: State;
	dispatch: React.Dispatch<any>;
}>({
	state: INITIAL_STATE,
	dispatch: () => null
});

export default HistogramContext;
