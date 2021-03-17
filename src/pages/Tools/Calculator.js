import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { calculate } from './utilis';

const buttons = {
	ButtonsName: ['A/C', '+/-', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'],
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
	const [previousNum, setPreviousNum] = useState(0);
	const [calculatedResult, setCalculatedResult] = useState(0);

	function handleChange(operator) {
		const res = calculate(operator, previousNum, calculatedResult);
		setPreviousNum(res.previousNum);
		setCalculatedResult(res.calculatedResult);
	}

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
							<ButtonCalculator value={value} clickHandler={handleChange} key={value.toString()} />
						))
					}
				</div>
				<div id="ButtonsRight" className="col-3">
					{
						buttons.ButtonsName2.map((value) => (
							<ButtonCalculator value={value} clickHandler={handleChange} key={value.toString()} />
						))
					}
				</div>
			</div>
		</hgroup>
	);
}
