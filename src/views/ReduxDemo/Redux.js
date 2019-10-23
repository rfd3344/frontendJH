
// Action
export const filter_action = ( id, value ) => {
	return ( { type: 'FILTER', id, value	} )
}

// Reducer
let InitialState = {
	products: [],
	filters: {
		Search: '',
		CategoryFilter:'ALL',
		SortBy: null,
		DateFrom: null,
		DateTo:null,
		PriceFrom:null,
		PriceTo:null,
		page: 1
	}
}
const ProductFilter = (state = InitialState, action) => {
	switch (action.type) {
		case 'FILTER':
			state.filters[action.id] = action.value
			return { ...state }
		default: return state
	}
}

export default ProductFilter
