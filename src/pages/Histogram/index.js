import React, { useReducer } from 'react';
import HistogramContext, { histogramReducer } from './context';
import { INITIAL_STATE } from '@/constants/histogram';

import Settings from './Settings';
import Chart from './Chart';
import './index.css';

function Histogram() {
	const [state, dispatch] = useReducer(histogramReducer, INITIAL_STATE);
	return (
		 <div className="histogram">
			<HistogramContext.Provider value={{state, dispatch}}>
				<Settings />
				<Chart />
			</HistogramContext.Provider>
		</div>
	);
}

export default Histogram;
