import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import PeopleList from './PeopleList';
import Pagination from './Pagination';
import PersonDetails from './PersonDetails';

const useStyles = makeStyles(() => ({
	h1: {
		textAlign: 'center',
	},
}));

export default function StarWars() {
	const classes = useStyles();
	return (
		<section>
			<h1 className={classes.h1}> StarWars People List </h1>
			<Paper>
				<PeopleList />
				<Pagination />
				<PersonDetails />
			</Paper>
		</section>
	);
}
