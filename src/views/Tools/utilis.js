import _ from 'lodash';

export default function calculate(inputValue, res1, res2) {
	if (_.isSafeInteger(inputValue)) {
		res2 = res2.toString() + inputValue
		res2 = parseFloat(res2);
	}else{
		switch(inputValue){
			case 'A/C':
				res1 = res2 = 0;
				break;
			case '+/-':
				res2 = -res2;
				break;
			case '%':

				break;
			case '.':
				res2 += '.';
				break;
			case '+':
				res1 = res2 + '+';
				res2 = 0;
				break;
			case '-':
				res1 = res2 + '-';
				res2 = 0;
				break;
			case 'x':
				res1 = res2 + '*';
				res2 = 0;
				break;
			case '/':
				res1 = res2 + '/';
				res2 = 0;
				break;
			case '=':
				res2 = eval(res1 + res2);
				res1 = 0;
				break;
			default:
				res2 = 'Error Occurs';
		}
	}

	return {'res1':res1, 'res2': res2};
}
