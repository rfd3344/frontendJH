
export const AddBoard = (x, y, dir) => ({
	type: 'AddBoard', x, y, dir,
});

export const MovePiece = (player, dir) => ({
	type: 'MovePiece', player, dir,
});

export const Undo = () => ({
	type: 'Undo',
});

/**
 * Reducer
 */
const horizontalGaps = Array(9).fill(0).map(() => Array(9).fill(0));
const verticalGaps = Array(9).fill(0).map(() => Array(9).fill(0));
for(let row of horizontalGaps) {
	row[8] = false;
}

verticalGaps[8].fill(false);

const InitialState = {
	horizontalGaps,
	verticalGaps,
	Player1: { row: 1, col: 5, board: 10 },
	Player2: { row: 9, col: 5, board: 10 },
	All_Actions: [],
};

const Quoridor = (state = InitialState, action) => {
	// Deep copy multiple demension
	const present = {
		Player1: Object.assign({}, state.Player1),
		Player2: Object.assign({}, state.Player2),
	};

	present.horizontalGaps = state.horizontalGaps.map((arr) => arr.slice());
	present.verticalGaps = state.verticalGaps.map((arr) => arr.slice());
	switch (action.type) {
	case 'AddBoard':
		if (action.dir === 'Hor' && state.horizontalGaps[action.x][action.y] === 0) {
			state.horizontalGaps[action.x][action.y] =1;
			if (action.y > 0) state.horizontalGaps[action.x][action.y - 1] = false;
			state.horizontalGaps[action.x][action.y+1] = false;
		}
		if (action.dir === 'Ver' && state.verticalGaps[action.x][action.y] === 0) {
			state.verticalGaps[action.x][action.y] = 1;
			if (action.x > 0) state.verticalGaps[action.x - 1][action.y] = false;
			state.verticalGaps[action.x + 1][action.y] = false;
		}
		state.All_Actions.push( present )
		return Object.assign( {}, state, { completed:!state.completed} );
	case 'MovePiece':
		if (action.player === 'Player1') {
			if (action.dir === 'top') state.Player1.row -= 1;
			if (action.dir === 'right') state.Player1.col += 1;
			if (action.dir === 'bottom') state.Player1.row += 1;
			if (action.dir === 'left') state.Player1.col -= 1;
		}
		if (action.player === 'Player2') {
			if (action.dir === 'top') state.Player2.row -= 1;
			if (action.dir === 'right') state.Player2.col += 1;
			if (action.dir === 'bottom') state.Player2.row += 1;
			if (action.dir === 'left') state.Player2.col -= 1;
		}
		state.All_Actions.push( present )
		return Object.assign( {}, state, {completed:!state.completed})
	case 'Undo': {
		if( state.All_Actions.length > 0 ){
			state = {
				...state.All_Actions[state.All_Actions.length - 1],
				All_Actions: state.All_Actions,
				completed: !state.completed,
			};
			state.All_Actions.pop();
		}
		return state;
	}
	default: return state;
	}
};

export default Quoridor;
