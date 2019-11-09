
export const AddBoard = ( x,y,dir ) =>({
	type: 'AddBoard', x, y, dir
})
export const MovePiece = ( player, dir ) =>({
	type: 'MovePiece', player, dir
})
export const Undo = () =>({
	type: 'Undo'
})
/*********************	Reducer *****************/
let Hori_Gaps= Array(9).fill(0).map( x =>Array(9).fill( 0 ) )
let Ver_Gaps = Array(9).fill(0).map( x =>Array(9).fill( 0 ) )
for( let row of Hori_Gaps ){ row[8] = false }
Ver_Gaps[8].fill(false)

let InitialState = {
	Hori_Gaps: Hori_Gaps,
	Ver_Gaps: Ver_Gaps,
	Player1: {row:1, col:5, board:10 },
	Player2: {row:9, col:5, board:10 },
	All_Actions: []
}
const Quoridor = (state = InitialState, action) => {
	/**************	Deep copy multiple demension *********/
	let present = {
		Player1: Object.assign({}, state.Player1 ),
		Player2: Object.assign({}, state.Player2 )
	}
	present.Hori_Gaps = state.Hori_Gaps.map( (arr)=>{
		return arr.slice();
	});
	present.Ver_Gaps = state.Ver_Gaps.map( (arr)=>{
		return arr.slice();
	});
	switch (action.type) {
		case 'AddBoard':
			if( action.dir =='Hor' && state.Hori_Gaps[action.x][action.y] === 0 ){
				state.Hori_Gaps[action.x][action.y] =1
				if(action.y>0) state.Hori_Gaps[action.x][action.y-1] = false
				state.Hori_Gaps[action.x][action.y+1] = false
			}
			if( action.dir =='Ver' && state.Ver_Gaps[action.x][action.y] === 0	){
				state.Ver_Gaps[action.x][action.y] =1
				if(action.x>0) state.Ver_Gaps[action.x-1][action.y] = false
				state.Ver_Gaps[action.x+1][action.y] = false
			}
			state.All_Actions.push( present )
			return Object.assign( {}, state, { completed:!state.completed} )
		case 'MovePiece':
			if( action.player ==='Player1' ){
				if( action.dir==='top' )		state.Player1.row -=1;
				if( action.dir==='right' )	state.Player1.col +=1;
				if( action.dir==='bottom')	state.Player1.row +=1;
				if( action.dir==='left' )	 state.Player1.col -=1;
			}
			if( action.player ==='Player2' ){
				if( action.dir==='top' )		state.Player2.row -=1;
				if( action.dir==='right' )	state.Player2.col +=1;
				if( action.dir==='bottom' ) state.Player2.row +=1;
				if( action.dir==='left' )	 state.Player2.col -=1;
			}
			state.All_Actions.push( present )
			return Object.assign( {}, state, {completed:!state.completed})
		case 'Undo':{
			if( state.All_Actions.length > 0 ){
				state = {
					...state.All_Actions[ state.All_Actions.length-1 ],
					All_Actions: state.All_Actions,
					completed: !state.completed
				}
				state.All_Actions.pop()
			}
			return state
		}
		default: return state
	}
}

export default Quoridor
