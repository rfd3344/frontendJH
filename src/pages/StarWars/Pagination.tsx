import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import { connect } from 'react-redux';
import { getPeopleList } from '@/actions/starWars';
import { MapState, Pagination } from '@/schemas/starWars';


function Pagination({ count, pageNumber, handleChangePage } : Pagination) {
	return (
		<div>
			<TablePagination
				component="div"
				count={count}
				rowsPerPage={10}
				page={pageNumber - 1}
				rowsPerPageOptions={[]}
				onChangePage={handleChangePage}
			/>
		</div>
	);
}

// (starWars : State) => {count: number, pageNumber: number}
const mapStateToProps = ({ starWars }: MapState)=> ({
	count: starWars.count,
	pageNumber: starWars.pageNumber,
});

const mapDispatchToProps = (dispatch: any) => ({
	handleChangePage: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>, pageNumber:number) => {
		dispatch(getPeopleList(pageNumber + 1));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
