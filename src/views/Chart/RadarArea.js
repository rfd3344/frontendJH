
import React from 'react';
import Chart from 'chart.js'

export default class RadarArea extends React.Component {
	constructor(props){
		super(props);
		let chart;
	}
	componentDidMount(){
		let myChart = new Chart(this.chart, {
			type: 'radar',
			data: {
				labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
				datasets: [{
						label: 'Label1',
						data:[10, 13, 11, 15, 12, 8],
						backgroundColor: 'rgba(54, 162, 235, 0.2)' ,
						borderColor: 'rgba(54, 162, 235, 1)'	,
						borderWidth: 1
					},{
						label: 'Label2',
						data:[12, 19, 3, 5, 2, 3],
						backgroundColor: 'rgba(255, 99, 132, 0.2)',
						borderColor: 'rgba(255,99,132,1)',
						borderWidth: 1
					},
				],
			},
		});
	}
	render() {
			return (
				<div>
					<h2> RadarArea </h2>
					<canvas ref={ node=>this.chart=node } width="400" height="300"></canvas>
				</div>
			);
	}
}
