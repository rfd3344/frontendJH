
import React from 'react';
import Chart from 'chart.js';
// export default function BarChart() {
export default class BarChart extends React.Component {
	constructor(props){
		super(props);
		let chart;
	}
	componentDidMount(){
		let myChart = new Chart(this.chart, {
			type: 'bar',
			data: {
				labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
				datasets: [{
					label: 'Label1',
					data: [12, 19, 3, 5, 2, 3],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
					],
					borderWidth: 1
				}]
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
					<h2> BarChart </h2>
					<canvas ref={ node=>this.chart=node } width="400" height="300"></canvas>
				</div>
			);
	}
}
