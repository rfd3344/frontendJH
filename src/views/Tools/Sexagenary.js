
import React from 'react';
export default class Sexagenary extends React.Component {
	constructor(props){
		super(props);
		this.state = { res: '甲子' };
	}
	handleChange = e =>{
		let year = parseInt(this.input.value)
		let year0 = (year+56)%60
		let heaven = '甲乙丙丁戊己庚辛壬癸'.split('')
		let earth = '子丑寅卯辰巳午未申酉戌亥'.split('')
		let h_index = Math.ceil(year0%10)
		let e_index = Math.ceil(year0%12)
		this.setState({ res: heaven[h_index]+earth[e_index] })
	}
	render() {
		return (
			<hgroup id="Sexagenary" class="alert alert-danger">
				<h2> Sexagenary </h2> <br/>
				<h4> 天干地支 </h4>
				<p> 甲乙丙丁戊己庚辛壬癸 </p>
				<p> 子丑寅卯辰巳午未申酉戌亥 </p>
				<div class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text">Year:</span>
					</div>
					<input type="number" class="form-control"
						onChange={this.handleChange} ref={ node => this.input=node }/>
					<div class="input-group-append">
						<span class="input-group-text">= {this.state.res}</span>
					</div>
				</div>
			</hgroup>
		)
	}
}
