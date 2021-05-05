import React, { useContext } from 'react';
import HistogramContext, { changeMaxYAxis, changeReadOnly } from './context';


function Settings() {
	 const {state, dispatch}= useContext(HistogramContext);
	 const handleMaxYAxisChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		 e.preventDefault();
		 const value = parseInt(e.target.value) ? parseInt(e.target.value) : 0;
		 dispatch(changeMaxYAxis(value));
	 };

	 const handleReadOnlyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		 dispatch(changeReadOnly(e.target.checked));
	 };

	 return (
		 <div className="settings">
			<label>
				Y-Axis Maximun:
				<input id="maxYAxis" defaultValue={state.maxYAxis} onChange={handleMaxYAxisChange}/>
			</label>
			<label>
				Read-only Mode
				<input type="checkbox" id="readOnlyMode" checked={state.readOnly} onChange={handleReadOnlyChange} />
			</label>
		</div>
	);
}

export default Settings;
