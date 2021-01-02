import React from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';

export default function Charts() {
	return (
		<section id="Chart">
			<h1> Chart </h1>
			<h5>https://github.com/jerairrest/react-chartjs-2/tree/master/example/src/components </h5>
			<div className="row justify-content-center">
				<div className="col-sm-6">
					<BarChart />
				</div>
				<div className="col-sm-6">
					<LineChart />
				</div>
			</div>
		</section>
	);
}
