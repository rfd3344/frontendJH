
import React from 'react';

import BarChart from './BarChart'
import LineChart from './LineChart'
import MixedChart from './MixedChart'
import PolarArea from './PolarArea'
import RadarArea from './RadarArea'



const Charts = () =>(
	<section id="Chart" >
		<h1> Chart </h1>
		<div class="row justify-content-center">
			<div class="col-sm-6"> <BarChart /> </div>
			<div class="col-sm-6"> <LineChart /> </div>
		</div>
		<br />
		<div class="row justify-content-center">
			<div class="col-sm-6"> <MixedChart /> </div>
			<div class="col-sm-6"> <PolarArea /> </div>
		</div>
		<div class="row justify-content-center">
			<div class="col-sm-6"> <RadarArea /> </div>
			
		</div>
	</section>
);

export default Charts
