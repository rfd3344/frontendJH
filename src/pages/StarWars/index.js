import React from 'react';
import PeopleList from './PeopleList';
import Pagination from './Pagination';
import PersonDetails from './PersonDetails';

export default function StarWars() {
	return (
		<section>
			<PeopleList />
			<Pagination />
			<PersonDetails />
		</section>
	);
}
