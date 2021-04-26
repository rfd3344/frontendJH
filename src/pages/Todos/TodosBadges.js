import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function TodosBadges({ totalNum, completedNum }) {
	return (
		<div className="TodosBadges">
			<span className="badge badge-pill badge-primary px-4 py-2">
				Total:
				{totalNum}
			</span>
			<span className="badge badge-pill badge-success px-4 py-2">
				Completed:
				{completedNum}
			</span>
		</div>
	);
}


TodosBadges.propTypes = {
	totalNum: PropTypes.number.isRequired,
	completedNum: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
	totalNum: state.todos.totalNum,
	completedNum: state.todos.completedNum,
});


export default connect(mapStateToProps)(TodosBadges);
