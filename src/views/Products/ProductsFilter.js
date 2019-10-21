import React from 'react'
import { Dispatch, connect } from 'react-redux'

import { filter_action } from './Redux.js'

const ProductsFilter =	({ catagories, dispatch }) => {
	let handleChange= (e) => {
		dispatch( filter_action( e.target.id, e.target.value ) )
	}
	return (
		<div id="filters">
			<div class="row ">
				<div class="col">
					<input id="Search" type="text" class="form-control"
						placeholder="Search..." onChange={handleChange}/>
				</div>
				<div class="col-4">
					<div class="input-group ">
						<div class="input-group-prepend">
							<span class="input-group-text">Date:</span>
							<span class="input-group-text">From</span>
						</div>
						<input id="DateFrom" type="text" class="form-control"
							onChange={handleChange} />
						<div class="input-group-prepend">
							<span class="input-group-text">-</span>
						</div>
						<input id="DateTo" type="text" class="form-control"
							onChange={handleChange} />
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<select id="CategoryFilter" class="custom-select"
						onChange={handleChange} >
						<option value="ALL" selected>Filter By Category...</option>
						{ catagories.map( catagory =>(
								<option value={catagory}>{catagory}</option>
							))
						}
					</select>
				</div>
				<div class="col">
					<select id="SortBy" class="SortBy custom-select"
						onChange={handleChange} >
						<option value="Newness" selected>Sort By Newness</option>
						<option value="Rating">Sort by Rating</option>
						<option value="Sold">Sort by Sold</option>
						<option value="LowPrice">Price: Low to High</option>
						<option value="HighPrice">Price: High to Low</option>
					</select>
				</div>
				<div class="col">
					<div class="input-group ">
						<div class="input-group-prepend">
							<span class="input-group-text">$</span>
						</div>
						<input id="PriceFrom" type="text" class="form-control"
							onChange={handleChange} />
						<div class="input-group-prepend">
							<span class="input-group-text">-</span>
							<span class="input-group-text">$</span>
						</div>
						<input id="PriceTo" type="text" class="form-control"
							onChange={handleChange} />
					</div>
				</div>
			</div>
		</div>
	)
}
export default connect()(ProductsFilter)
