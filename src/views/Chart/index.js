
import React from 'react';
import AdminTemplate from '_layout/AdminTemplate';
import BarChart from './BarChart';
import LineChart from './LineChart';
import MixedChart from './MixedChart';
import PolarArea from './PolarArea';
import RadarArea from './RadarArea';

export default function Charts() {
	return (
		<AdminTemplate>
			<section id="Chart">
				<h1> Chart </h1>
				<div className="row justify-content-center">
					<div className="col-sm-6">
						<BarChart />
					</div>
					<div className="col-sm-6">
						<LineChart />
					</div>
				</div>
				<br />
				<div className="row justify-content-center">
					<div className="col-sm-6">
						<MixedChart />
					</div>
					<div className="col-sm-6">
						<PolarArea />
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-sm-6">
						<RadarArea />
					</div>
				</div>
			</section>
		</AdminTemplate>
	);
}
