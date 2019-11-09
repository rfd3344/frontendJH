
import React from 'react';
import Chart from 'chart.js'

export default class MixedChart extends React.Component {
	constructor(props){
		super(props);
		let chart;
	}
	componentDidMount(){
		let myChart = new Chart(this.chart, {
			type: 'bar',
			data: {
				datasets: [{
					 label: 'Bar Dataset',
					 data: [10, 20, 30, 40],
					 backgroundColor: 'rgba(54, 162, 235, 0.2)' ,
					 borderColor: 'rgba(54, 162, 235, 1)'	,
				 }, {
					 label: 'Line Dataset',
					 data: [5, 12, 22, 32],
					 backgroundColor: 'rgba(255, 99, 132, 0.2)',
					 borderColor: 'rgba(255,99,132,1)',
					 type: 'line'
				 }],
				 labels: ['January', 'February', 'March', 'April']
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
					<h2> MixedChart </h2>
					<canvas ref={ node=>this.chart=node } width="400" height="300"></canvas>
				</div>
			);
	}
}
