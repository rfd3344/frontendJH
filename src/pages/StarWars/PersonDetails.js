import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function PersonDetails({ personDetails }) {
	if(Object.keys(personDetails).length === 0) return null;

	return (
		<Box display="flex" justifyContent="center" pb={2}>
			<Box boxShadow={1} px={3} py={1} mx={2}>
				<Typography>
						Name: { personDetails.name }
				</Typography>
			 <Typography>
			 		Height: { personDetails.height }
			 </Typography>
			 <Typography>
				 Birth Year: { personDetails.birth_year }
			 </Typography>
			 <Typography>
				 Gender: { personDetails.gender }
			 </Typography>
			 <Typography>
				 Films: { personDetails.films && personDetails.films.map(film => `${film.title}, `) }
			 </Typography>
		 </Box>
	 </Box>
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
