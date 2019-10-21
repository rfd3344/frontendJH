
import React from 'react';
import Chart from 'chart.js'

export default class PolarArea extends React.Component {
	constructor(props){
		super(props);
		let chart;
	}
	componentDidMount(){
		let myChart = new Chart(this.chart, {
			type: 'polarArea',
			data: {
				labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
				datasets: [{
					 data: [12, 19, 13, 15, 12, 13],
					 backgroundColor: [
						 'rgba(255, 99, 132, 0.2)',
						 'rgba(54, 162, 235, 0.2)',
						 'rgba(255, 206, 86, 0.2)',
						 'rgba(75, 192, 192, 0.2)',
						 'rgba(153, 102, 255, 0.2)',
						 'rgba(255, 159, 64, 0.2)'
					 ],
				 }],
			},
		});
	}
	render() {
			return (
				<div>
					<h2> PolarArea </h2>
					<canvas ref={ node=>this.chart=node } width="400" height="300"></canvas>
				</div>
			);
	}
}
