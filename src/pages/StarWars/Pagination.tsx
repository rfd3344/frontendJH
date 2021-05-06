import React, { useCallback } from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import { connect } from 'react-redux';
import { getPeopleList } from '@/actions/starWars';
import { MapState, Pagination } from '@/schemas/starWars';

function Pagination({ count, pageNumber, dispatch } : Pagination) {
	const handleChangePage = useCallback((e:React.MouseEvent<HTMLButtonElement, MouseEvent>, pageNumber:number) => {
		dispatch(getPeopleList(pageNumber + 1));
	}, []);

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

const mapStateToProps = ({ starWars }: MapState)=> ({
	count: starWars.count,
	pageNumber: starWars.pageNumber,
});

export default connect(mapStateToProps)(Pagination);
