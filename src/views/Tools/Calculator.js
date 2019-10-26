import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { calculate } from './utilis';

const buttons = {
	ButtonsName: ['A/C', '+/-', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'],
	ButtonsName2: ['+', '-', 'x', '/', '='],
};

const ButtonCalculator = ({ value, clickHandler }) => (
	<button type="button" className="btn" onClick={() => clickHandler(value)}>
		{value}
	</button>
);

ButtonCalculator.propTypes = {
	value: PropTypes.string.isRequired,
	clickHandler: PropTypes.func.isRequired,
};

export default function Calculator() {
	const [val1, setVal1] = useState(0);
	const [calculatedResult, setCalculatedResult] = useState(0);
	// constructor(props) {
	// 	super(props);
	// 	this.state = { res1: 0, res2: 0 };
	// }

	// componentDidMount() {
	// 	window.addEventListener('keypress', keyListener.bind(this) );
	// 	function keyListener(e) {
	// 		let value;
	// 		if (Number(e.key) || Number(e.key) === 0) {
	// 			value =	Number(e.key);
	// 		} else if (e.key === '*') {
	// 			value = 'x';
	// 		} else if (e.key === 'Enter') {
	// 			value = '=';
	// 		} else {
	// 			value = e.key;
	// 		}
	// 		const res = calculate(value, this.state.res1, this.state.res2);
	// 		this.setState(res);
	// 	}
	// }

	const handleChange = (value) => {
		const res = calculate(value, val1, result);
		// this.setState(res);
	};

	return (
		<hgroup id="Calculator" className="alert alert-success">
			<h2> Calculator </h2>
			<br />
			<div className="row">
				<div className="result alert alert-dark">
					<strong>{calculatedResult}</strong>
				</div>
			</div>
			<div className="row">
				<div id="ButtonsLeft" className="col-9">
					{
						buttons.ButtonsName.map((value) => (
							<ButtonCalculator value={value} clickHandler={handleChange} />
						))
					}
				</div>
				<div id="ButtonsRight" className="col-3">
					{
						buttons.ButtonsName2.map((value) => (
							<ButtonCalculator value={value} clickHandler={handleChange} />
						))
					}
				</div>
			</div>
		</hgroup>
	);
}
