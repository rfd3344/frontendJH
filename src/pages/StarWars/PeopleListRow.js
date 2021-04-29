import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

import { getPersonDetails } from '@/actions/starWars';

const StyledTableRow = withStyles(() => ({
	root: {
		'&:hover': {
			cursor: 'pointer',
		},
	},
}))(TableRow);

function PeopleListRow({
	name, height, mass, url, handleClick,
}) {
	return (
		<>
			<StyledTableRow hover onClick={() => handleClick(url)}>
				<TableCell>
					{name}
				</TableCell>
				<TableCell align="center">
					{height}
				</TableCell>
				<TableCell align="right">
					{mass}
				</TableCell>
			</StyledTableRow>
		</>
	);
}

PeopleListRow.propTypes = {
	name: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
	mass: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	handleClick: (url) => dispatch(getPersonDetails(url)),
});

export default connect(null, mapDispatchToProps)(PeopleListRow);
