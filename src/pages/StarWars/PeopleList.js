import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { connect } from 'react-redux';

import Loading from '_components/Loading';

import { getPeopleList } from '_actions/starWars';
import PeopleListRow from './PeopleListRow';

function PeopleList({ peopleList, initialPage, loading }) {
	useEffect(() => {
		if (peopleList.length === 0) {
			initialPage(1);
		}
	}, []);

	return (
		<>
			<TableContainer>
				<Table size="small" aria-label="a dense table">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align="center">Height</TableCell>
							<TableCell align="right">Mass</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{peopleList.length > 0 && peopleList.map((person) => (
							<PeopleListRow
								key={person.name}
								name={person.name}
								height={person.height}
								mass={person.mass}
								url={person.url}
							/>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Loading open={loading} />
		</>
	);
}


const mapStateToProps = (state) => ({
	peopleList: state.starWars.peopleList,
	loading: state.starWars.loading,
});

const mapDispatchToProps = (dispatch) => ({
	initialPage: (pageNumber) => dispatch(getPeopleList(pageNumber)),
});

PeopleList.propTypes = {
	peopleList: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			height: PropTypes.string.isRequired,
			mass: PropTypes.string.isRequired,
		}),
	).isRequired,
	initialPage: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
