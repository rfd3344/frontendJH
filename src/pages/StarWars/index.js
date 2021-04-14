
import React from 'react';
import PeopleList from './PeopleList';
import Pagination from './Pagination';

export default function StarWars() {
	return (
		<section>
			<h1>Star Wars People List</h1>
			<PeopleList />
			<Pagination />

		</section>
	);
}
