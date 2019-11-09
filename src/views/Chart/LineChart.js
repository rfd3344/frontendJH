
import React from 'react';
import Chart from 'chart.js';

// export default function BarChart() {
export default class LineChart extends React.Component {
	constructor(props){
		super(props);
		let chart;
	}
	componentDidMount(){
		let myChart = new Chart(this.chart, {
			type: 'line',
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June'],
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
				]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			}
		});
	}
	render() {
			return (
				<div>
					<h2> LineChart </h2>
					<canvas ref={ node=>this.chart=node } width="400" height="300"></canvas>
				</div>
			);
	}
}
