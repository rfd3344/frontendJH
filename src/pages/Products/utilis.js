export const processProductList = ( products, filters ) =>{
	// console.log( products )
	// console.log( filters.filters )

	/****************	Search ******************/
	let SearchFilter = filters.filters.Search.trim()
	if( SearchFilter ){
		let regexp = new RegExp(SearchFilter,"i");
		let TempProducts =[];
		products.map( item => {
			let found = item.name.match(regexp);
			if( found ) TempProducts.push(item);
		})
		products = TempProducts
	}
	/****************	Date	******************/

	/*****************	Category **********************/
	let CategoryFilter = filters.filters.CategoryFilter;
	if( CategoryFilter !== 'ALL' ){
		let TempProducts =[];
		products.map( item => {
			if( item.catagory == CategoryFilter ) TempProducts.push(item);
		})
		products = TempProducts
	}

	/****************** Price	***************/
	let PriceFrom = parseFloat(filters.filters.PriceFrom);
	let PriceTo = parseFloat(filters.filters.PriceTo);
	if( PriceFrom &&	(PriceFrom < PriceTo)	){
		let TempProducts =[];
		products.map( item => {
			if( item.price>PriceFrom && item.price<PriceTo ) TempProducts.push(item);
		})
		products = TempProducts
	}

	/******************	Sort *****************/
	if( filters.filters.SortBy == 'Rating' ){
		products.sort( (a, b) => { return b.rating - a.rating });
	}
	if( filters.filters.SortBy == 'Sold' ){
		products.sort( (a, b) => { return b.sellCount - a.sellCount });
	}
	if( filters.filters.SortBy == 'LowPrice' ){
		products.sort( (a, b) => { return a.price - b.price });
	}
	if( filters.filters.SortBy == 'HighPrice' ){
		products.sort( (a, b) => { return b.price - a.price });
	}
	/********************	Page *****************/
	let page = filters.filters.page
	let TempProducts =[];
	let totalpages = Math.ceil( products.length/10 )
	if( products.length <= 10 )	page = 1;
	let loopTo = products.length>page*10 ? page*10 : products.length
	for (let i=(page-1)*10+1; i<=loopTo; i++) {
			TempProducts.push( products[i-1] );
	}
	 products = TempProducts

	return [products, totalpages];
}
