
import React from 'react';
import './style.less';
import Sexagenary from './Sexagenary'
import Calculator from './Calculator'

const Tools = () => (
	<section id="Tools">
		<h1> Tools </h1>
		<div class="row justify-content-around">
			<div class="col-sm-6"> <Calculator /> </div>
			<div class="col-sm-4"> <Sexagenary /> </div>
		</div>
	</section>
)
export default Tools
