import React from 'react';
import PropTypes from 'prop-types';
import TablePagination from '@material-ui/core/TablePagination';
import { connect } from 'react-redux';
import { getPeopleList } from '_actions/starWars';

function Pagination({ count, pageNumber, handleChangePage }) {
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

const mapStateToProps = (state) => ({
	count: state.starWars.count,
	pageNumber: state.starWars.pageNumber,
});

const mapDispatchToProps = (dispatch) => ({
	handleChangePage: (e, pageNumber) => {
		dispatch(getPeopleList(pageNumber + 1));
	},
});

Pagination.propTypes = {
	count: PropTypes.number.isRequired,
	pageNumber: PropTypes.number.isRequired,
	handleChangePage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
