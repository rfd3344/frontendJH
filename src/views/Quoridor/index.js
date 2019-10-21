
import React from 'react';
import { connect } from 'react-redux'
import './style.less';
import CheckBoard from './checkboard';
import DispayBoard from './dispayboard';
import Player from './player';

const Quoridor = ( {Player1,Player2} ) => (
	<div id="quoridor">
		<h1 > Quoridor </h1>
		<br/>
		<div className="row justify-content-center">
			<div className="col-9"> <CheckBoard /> </div>
			<div className="col-2 align-self-center"> <DispayBoard /> </div>
		</div>
		<br/>
		<Player PlayerID="Player1" data={Player1} />
		<Player PlayerID="Player2" data={Player2} />

	</div>
);

const mapStateToProps = (state) => ({
	Player1: state.Quoridor.Player1,
	Player2: state.Quoridor.Player2
})
const mapDispatchToProps = dispatch => ({
	AddBoard: (x,y,dir) => dispatch( AddBoard(x,y,dir) )
})
export default connect( mapStateToProps, mapDispatchToProps )(Quoridor)
