
import React from 'react';
import { dispatch,connect } from 'react-redux'

import { MovePiece } from './Redux.js'

const Player = ({ PlayerID, data, AddBoard, dispatch }) => {
	$(document).ready(function(){
		let AppendTo = '#CheckBoard .row:nth-of-type(' + data.row + ') .col:nth-of-type('+ data.col + ')';
		$('#'+PlayerID).appendTo( AppendTo );
	});
	let allowDrop = (e) => { e.preventDefault() }
	let drag = (e) =>{ e.dataTransfer.setData("text", e.target.id) }
	let drop = (e) => { dispatch( MovePiece( PlayerID, e.target.id ) ) }

	return(
		<div id={PlayerID} className="players">
			<span id="main" draggable="true" onDragStart={drag} ></span>
			<span id="top" onDrop={drop} onDragOver={allowDrop}></span>
			<span id="right" onDrop={drop} onDragOver={allowDrop}></span>
			<span id="bottom" onDrop={drop} onDragOver={allowDrop}></span>
			<span id="left" onDrop={drop} onDragOver={allowDrop}></span>
		</div>
	);
}

const mapStateToProps = (state) => ({
	completed: state.Quoridor.completed
})

export default connect( mapStateToProps )(Player)
