import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchText, cancelSearch } from '../../actions/photosSearch';

function SearchBar({ shownPhotos, changeHandler, clearState }) {
	const textInput = React.createRef();
	const clearHandler = (e) => {
		e.preventDefault();
		textInput.current.value = '';
		clearState();
	};

	return (
		<div id="SearchBar" className="input-group">
			<input
				id="Search"
				className="form-control"
				placeholder="search by city"
				onChange={changeHandler}
				ref={textInput}
			/>
			<div className="input-group-append">
				{
					shownPhotos.length > 0
						? (
							<button type="button" id="CancelSearch" onClick={clearHandler}>
								<i className="material-icons">close</i>
							</button>
						)
						: (
							<button type="button">
								<i className="material-icons">search</i>
							</button>
						)
				}
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	shownPhotos: state.photosSearch.shownPhotos,
});

const mapDispatchToProps = (dispatch) => ({
	changeHandler: (e) => dispatch(searchText(e.target.value)),
	clearState: () => dispatch(cancelSearch()),
});

SearchBar.propTypes = {
	shownPhotos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			farm: PropTypes.number.isRequired,
			server: PropTypes.string.isRequired,
			secret: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	).isRequired,
	changeHandler: PropTypes.func.isRequired,
	clearState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
