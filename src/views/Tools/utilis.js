import _ from 'lodash';

function calculate(operator = '', previousNum = 0, calculatedResult = 0) {
	const convertedOperator = parseFloat(operator);
	if (_.isSafeInteger(convertedOperator)) {
		return {
			previousNum,
			calculatedResult: parseFloat(calculatedResult.toString() + convertedOperator),
		};
	}

	let newPreviousNum = previousNum;
	let newCalculatedResult = calculatedResult;
	switch (operator) {
	case 'A/C': // clear
		newPreviousNum = 0;
		newCalculatedResult = 0;
		break;
	case '+/-':
		newCalculatedResult = -calculatedResult;
		break;
	case '%':
		break;
	case '.':
		newCalculatedResult += '.';
		break;
	case '+':
		newPreviousNum = `${calculatedResult}+`;
		newCalculatedResult = 0;
		break;
	case '-':
		newPreviousNum = `${calculatedResult}-`;
		newCalculatedResult = 0;
		break;
	case 'x':
		newPreviousNum = `${calculatedResult}*`;
		newCalculatedResult = 0;
		break;
	case '/':
		newPreviousNum = `${calculatedResult}/`;
		newCalculatedResult = 0;
		break;
	case '=':
		newPreviousNum = 0;
		newCalculatedResult = eval(previousNum + calculatedResult); // eslint-disable-line
		break;
	default:
		throw new Error(`Errors: invalid operator typed: ${operator} in views/Tools/utilis`);
	}
	return {
		previousNum: newPreviousNum,
		calculatedResult: newCalculatedResult,
	};
}

export {
	calculate,  // eslint-disable-line
};
