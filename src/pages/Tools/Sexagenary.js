import React, { useState } from 'react';
import _ from 'lodash';

export default function Sexagenary() {
	const [result, setResult] = useState('--');

	function handleChange(e) {
		const heaven = '甲乙丙丁戊己庚辛壬癸'.split('');
		const earth = '子丑寅卯辰巳午未申酉戌亥'.split('');
		const inputValue = parseInt(e.target.value, 10);
		if (_.isSafeInteger(inputValue)) {
			const convertedYear = (inputValue + 56) % 60;
			const heavenIndex = Math.ceil(convertedYear % 10);
			const earthIndex = Math.ceil(convertedYear % 12);
			setResult(heaven[heavenIndex] + earth[earthIndex]);
		} else {
			setResult('--');
		}
	}

	return (
		<hgroup id="Sexagenary" className="alert alert-danger">
			<h2> Sexagenary </h2>
			<br />
			<h4> 天干地支 </h4>
			<p> 甲乙丙丁戊己庚辛壬癸 </p>
			<p> 子丑寅卯辰巳午未申酉戌亥 </p>
			<div className="input-group">
				<div className="input-group-prepend">
					<span className="input-group-text">Year:</span>
				</div>
				<input type="number" className="form-control" onChange={handleChange} />
				<div className="input-group-append">
					<span className="input-group-text">{result}</span>
				</div>
			</div>
		</hgroup>
	);
}
