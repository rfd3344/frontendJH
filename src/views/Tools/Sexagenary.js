import React from 'react';

export default class Sexagenary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { res: '甲子' };
	}

	handleChange(e) {
		const year = parseInt(this.input.value);
		const year0 = (year + 56) % 60;
		const heaven = '甲乙丙丁戊己庚辛壬癸'.split('');
		const earth = '子丑寅卯辰巳午未申酉戌亥'.split('');
		const h_index = Math.ceil(year0 % 10);
		const e_index = Math.ceil(year0 % 12);
		this.setState({ res: heaven[h_index] + earth[e_index] });
	}

	render() {
		return (
			<hgroup id="Sexagenary" className="alert alert-danger">
				<h2> Sexagenary </h2> <br/>
				<h4> 天干地支 </h4>
				<p> 甲乙丙丁戊己庚辛壬癸 </p>
				<p> 子丑寅卯辰巳午未申酉戌亥 </p>
				<div className="input-group">
					<div className="input-group-prepend">
						<span className="input-group-text">Year:</span>
					</div>
					<input type="number" className="form-control"
						onChange={this.handleChange} ref={ node => this.input=node }/>
					<div className="input-group-append">
						<span className="input-group-text">= {this.state.res}</span>
					</div>
				</div>
			</hgroup>
		)
	}
}
