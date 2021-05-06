import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

import { getPersonDetails } from '@/actions/starWars';
import { PeopleListRow } from '@/schemas/starWars';

const StyledTableRow = withStyles(() => ({
	root: {
		'&:hover': {
			cursor: 'pointer',
		},
	},
}))(TableRow);

function PeopleListRow({
	name, height, mass, url, dispatch,
}: PeopleListRow) {
	return (
		<>
			<StyledTableRow hover onClick={()=> dispatch(getPersonDetails(url))}>
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


export default connect()(PeopleListRow);
