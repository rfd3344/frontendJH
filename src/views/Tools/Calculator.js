
import React from 'react';
import { calculate } from './utilis'


export default class Calculator extends React.Component {
	constructor(props){
		super(props);
		this.state = { res1: 0 , res2: 0 }
	}
	handleChange = value =>{
		let res = calculate( value, this.state.res1, this.state.res2)
		this.setState( res )
	}
	componentDidMount(){
		window.addEventListener("keypress", keyListener.bind(this) );
		function keyListener(e){
			let value;
			if ( Number( e.key ) || Number( e.key )==0 ) {
				value =	Number( e.key )
			}else if ( e.key == '*' ){
				value = 'x'
			}else if ( e.key == 'Enter' ){
				value = '='
			}else{
				value = e.key
			}
			let res = calculate( value, this.state.res1, this.state.res2)
			this.setState( res )
		}
	}


	render() {
		return (
			<hgroup id="Calculator" class="alert alert-success">
				<h2> Calculator </h2> <br/>
				<div class="row">
					<div class="result alert alert-dark">
						<strong> {this.state.res2} </strong>
					</div>
				</div>
				<div class="row">
					<div id="ButtonsLeft" class="col-9">
						{
							this.props.ButtonsName.map( value=>(
								<Button_Calc value={value} clickHandler={this.handleChange}/>
							))
						}
					</div>
					<div id="ButtonsRight" class="col-3">
						{
							this.props.ButtonsName2.map( value=>(
								<Button_Calc value={value} clickHandler={this.handleChange}/>
							))
						}
					</div>
				</div>
			</hgroup>
		)
	}
}

Calculator.defaultProps = {
	ButtonsName: ['A/C','+/-','%',7,8,9,4,5,6,1,2,3,0,'.'],
	ButtonsName2: ['+','-','x','/','=']
}

const Button_Calc = ( {value,clickHandler} ) =>(
	<button type="button" class="btn" onClick={()=>clickHandler(value)}>
		 {value}
	</button>
)
