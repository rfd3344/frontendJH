import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


const StyledTableRow = withStyles(() => ({
	root: {
		'&:hover': {
			cursor: 'pointer',
		},
	},
}))(TableRow);

export default function PeopleListRow({ name, height, mass }) {
	return (
		<>
			<StyledTableRow hover>
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
};
