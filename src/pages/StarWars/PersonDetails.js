import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function PersonDetails({ personDetails }) {
	return (
		<div>
			{ personDetails.name }
		</div>
	);
}

PersonDetails.propTypes = {
	personDetails: PropTypes.shape({
		name: PropTypes.string,
		height: PropTypes.string,
		birth_year: PropTypes.string,
		gender: PropTypes.string,
		films: PropTypes.arrayOf(
			PropTypes.shape({
				title: PropTypes.string,
			}),
		),
	}).isRequired,
};

const mapStateToProps = (state) => ({
	personDetails: state.starWars.personDetails,
});



export default connect(mapStateToProps)(PersonDetails);
