import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from './Redux.js'
import { processProductList } from './utilis.js';
import { filter_action } from './Redux.js'

const ProductsList = ({ products, ProductFilter, dispatch }) =>{
	let totalpages;
	[products,totalpages] = processProductList(products, ProductFilter )
	let handleChange= (i) => {
		dispatch( filter_action( 'page', i ) )
	}
	return (
		<div>
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">Img </th>
						<th scope="col">Name</th>
						<th scope="col">Category</th>
						<th scope="col">Rating</th>
						<th scope="col">Sold</th>
						<th scope="col">Price</th>
					</tr>
				</thead>
				<tbody>
					{
						products.map( item =>(
							<tr>
								<td> <img src={item.icon} height="50px" alt="food" />	</td>
								<td>{item.name}</td>
								<td>{item.catagory}</td>
								<td>{item.rating}</td>
								<td>{item.sellCount}</td>
								<td>${item.price}</td>
							</tr>
						))
					}
				</tbody>
			</table>
			<nav aria-label="navigation">
				<ul className="pagination justify-content-end">
					<li className="page-item"><a className="page-link">Previous</a></li>
					{ function(){
						let rows = [];
						for (let i=1; i<=totalpages; i++) {
							rows.push(
								<li className="page-item">
									<a className="page-link" onClick={ (e)=>handleChange(i,e) }>{i}</a>
								</li>
							);
						}
						return rows;
						}()
					}
					<li className="page-item"><a className="page-link">Next</a></li>
				</ul>
			</nav>
		</div>
	)
}

const mapStateToProps = (state) => ({
	ProductFilter: state.ProductFilter
})

export default connect(mapStateToProps)(ProductsList)
