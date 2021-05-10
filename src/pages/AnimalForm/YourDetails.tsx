
import React, { useContext } from 'react';
import AnimalFormContext from './context';
// import


export default function YourDetails() {
	const {state, dispatch}= useContext(AnimalFormContext);
	const {email, password} = state.formDetails;
	const handleChange = (e) => {
		console.warn(e.target)
		// dispatch()
	}
	return (
		<>
			<input type="email" value={email} onChange={handleChange}/>
			<input type="password" value={password} onChange={handleChange}/>
		</>
	);
}
