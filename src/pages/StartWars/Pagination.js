import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changePage } from '../../actions/startWars';

function Pagination({ currentPage, totalPage, clickHandler }) {
	const displayList = [];
	let startPage = currentPage - 2;
	let endedPage = currentPage + 5;
	if (startPage <= 0) startPage = 1;
	if (endedPage > totalPage) endedPage = totalPage;
	for (let i = startPage; i <= endedPage; i++) {
		displayList.push(i);
	}
	return (
		<nav id="Pagination">
			<ul className="pagination justify-content-center">
				{
					displayList.map((i) => (
						<li className={i === currentPage ? 'page-item active' : 'page-item'} key={i}>
							<input type="button" className="page-link" value={i} onClick={clickHandler} />
						</li>
					))
				}
				{
					currentPage + 4 < totalPage && (
						<li className="page-item">
							<input type="button" className="page-link" value="..." disabled />
						</li>
					)
				}
			</ul>
		</nav>
	);
}

const mapStateToProps = (state) => ({
	currentPage: state.photosSearch.currentPage,
	totalPage: state.photosSearch.totalPage,
});

const mapDispatchToProps = (dispatch) => ({
	clickHandler: (e) => {
		const value = parseInt(e.target.value, 10);
		dispatch(changePage(value));
	},
});

Pagination.propTypes = {
	currentPage: PropTypes.number.isRequired,
	totalPage: PropTypes.number.isRequired,
	clickHandler: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
