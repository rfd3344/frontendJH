
import React from 'react';
import './style.less';
import AdminTemplate from '_layout/AdminTemplate';
import SearchBar from './SearchBar';
import QuantityPicker from './QuantityPicker';
import PhotosList from './PhotosList';
import Pagination from './Pagination';

export default function Home() {
	return (
		<AdminTemplate>
			<section id="PhotoSearch">
				<h1>Maxamation Interview Code Challenge 2018</h1>
				<SearchBar />
				<QuantityPicker />
				<PhotosList />
				<Pagination />
			</section>
		</AdminTemplate>
	);
}
