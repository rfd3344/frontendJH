import React from 'react'
import { Dispatch, connect } from 'react-redux'

import { filter_action } from './Redux.js'

const ProductsFilter =	({ catagories, dispatch }) => {
	let handleChange= (e) => {
		dispatch( filter_action( e.target.id, e.target.value ) )
	}
	return (
		<div id="filters">
			<div className="row ">
				<div className="col">
					<input id="Search" type="text" className="form-control"
						placeholder="Search..." onChange={handleChange}/>
				</div>
				<div className="col-4">
					<div className="input-group ">
						<div className="input-group-prepend">
							<span className="input-group-text">Date:</span>
							<span className="input-group-text">From</span>
						</div>
						<input id="DateFrom" type="text" className="form-control"
							onChange={handleChange} />
						<div className="input-group-prepend">
							<span className="input-group-text">-</span>
						</div>
						<input id="DateTo" type="text" className="form-control"
							onChange={handleChange} />
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<select id="CategoryFilter" className="custom-select"
						onChange={handleChange} >
						<option value="ALL" selected>Filter By Category...</option>
						{ catagories.map( catagory =>(
								<option value={catagory}>{catagory}</option>
							))
						}
					</select>
				</div>
				<div className="col">
					<select id="SortBy" className="SortBy custom-select"
						onChange={handleChange} >
						<option value="Newness" selected>Sort By Newness</option>
						<option value="Rating">Sort by Rating</option>
						<option value="Sold">Sort by Sold</option>
						<option value="LowPrice">Price: Low to High</option>
						<option value="HighPrice">Price: High to Low</option>
					</select>
				</div>
				<div className="col">
					<div className="input-group ">
						<div className="input-group-prepend">
							<span className="input-group-text">$</span>
						</div>
						<input id="PriceFrom" type="text" className="form-control"
							onChange={handleChange} />
						<div className="input-group-prepend">
							<span className="input-group-text">-</span>
							<span className="input-group-text">$</span>
						</div>
						<input id="PriceTo" type="text" className="form-control"
							onChange={handleChange} />
					</div>
				</div>
			</div>
		</div>
	)
}
export default connect()(ProductsFilter)
