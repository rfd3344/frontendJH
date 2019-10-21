
import React from 'react';
import './style.less';
import Sexagenary from './Sexagenary'
import Calculator from './Calculator'

const Tools = () => (
	<section id="Tools">
		<h1> Tools </h1>
		<div className="row justify-content-around">
			<div className="col-sm-6"> <Calculator /> </div>
			<div className="col-sm-4"> <Sexagenary /> </div>
		</div>
	</section>
)
export default Tools
