import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { MapState, PersonDetailsComp } from '@/schemas/starWars';

function PersonDetails({ personDetails }: PersonDetailsComp) {
	if (Object.keys(personDetails).length === 0) return null;

	return (
		<Box display="flex" justifyContent="center" pb={2}>
			<Box boxShadow={1} px={3} py={1} mx={2}>
				<Typography>
					Name:
					{ personDetails.name }
				</Typography>
				<Typography>
					Height:
					{ personDetails.height }
				</Typography>
				<Typography>
					Birth Year:
					{ personDetails.birth_year }
				</Typography>
				<Typography>
					Gender:
					{ personDetails.gender }
				</Typography>
				<Typography>
					Films:
					{ personDetails.films && personDetails.films.map((film) => `${film.title}, `) }
				</Typography>
			</Box>
		</Box>
	);
}

const mapStateToProps = ({ starWars }: MapState) => ({
	personDetails: starWars.personDetails,
});

export default connect(mapStateToProps)(PersonDetails);
