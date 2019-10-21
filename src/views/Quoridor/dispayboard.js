
import React from 'react';
import { connect } from 'react-redux'
import { Undo } from './Redux.js'

const DispayBoard = ({ All_Actions, Undo }) => {
	let BluePlay = All_Actions.length%2
	return(
		<div id="DispayBoard" class={BluePlay? "badge badge-primary" :"badge badge-danger"}>
			<button type="button" class="btn btn-secondary" onClick={Undo} >
				Undo <i class="material-icons"> replay </i>
			</button>
			<br/><br/><br/>
			<h6>Actions: {All_Actions.length} </h6>
			<h6>Player: {BluePlay ? 'Blue ':'Red '} </h6>
		</div>
	);
}

const mapStateToProps = (state) => ({
	All_Actions: state.Quoridor.All_Actions,
	completed: state.Quoridor.completed
})

const mapDispatchToProps = dispatch => ({
	Undo: () => dispatch( Undo() )
})
export default connect( mapStateToProps, mapDispatchToProps )(DispayBoard)
