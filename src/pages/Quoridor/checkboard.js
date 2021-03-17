
import React from 'react';
import { connect } from 'react-redux'
import { AddBoard } from './Redux.js'


const CheckBoard = ({Hori_Gaps,Ver_Gaps, AddBoard }) => {
	const index = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	return (
		<div id="CheckBoard" className="alert alert-secondary">
			{
				index.map( (row) =>(
					<div className="row">
						{
							index.map( (col) =>(
								<div className="col badge badge-dark">
									<div className={ Hori_Gaps[row][col]?'bottom active':'bottom'}
										onClick={()=>AddBoard(row,col,'Hor')} ></div>
									<div className={ Ver_Gaps[row][col]?'right active':'right'}
										onClick={()=>AddBoard(row,col,'Ver')} ></div>
								</div>
							))
						}
					</div>
				))
			}
		</div>
	);
};

const mapStateToProps = (state) => ({
	Hori_Gaps: state.Quoridor.Hori_Gaps,
	Ver_Gaps: state.Quoridor.Ver_Gaps,
	completed: state.Quoridor.completed
});

const mapDispatchToProps = (dispatch) => ({
	AddBoard: (x, y, dir) => dispatch(AddBoard(x, y, dir))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoard);
