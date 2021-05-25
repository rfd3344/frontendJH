import React, { useReducer } from 'react';
import useTitle from '@/hooks/useTitle';
import { INITIAL_STATE } from '@/constants/histogram';
import HistogramContext, { histogramReducer } from './context';
import Settings from './Settings';
import Chart from './Chart';
import './style.css';

function Histogram() {
  const [state, dispatch] = useReducer(histogramReducer, INITIAL_STATE);
  useTitle('Histogram');

  return (
    <div className="histogram">
      <HistogramContext.Provider value={{ state, dispatch }}>
        <Settings />
        <Chart />
      </HistogramContext.Provider>
    </div>
  );
}

export default Histogram;
