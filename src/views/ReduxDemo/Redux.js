
// Action
export const reduxDemoAction = (id, value) => ({
	type: 'FILTER',
	id,
	value,
});

// Reducer
const initialState = {
	products: [],
	filters: {
		Search: '',
		CategoryFilter: 'ALL',
		SortBy: null,
		DateFrom: null,
		DateTo: null,
		PriceFrom: null,
		PriceTo: null,
		page: 1,
	},
};

const ProductFilter = (state = initialState, action) => {
	switch (action.type) {
	case 'FILTER':
		state.filters[action.id] = action.value;
		return { ...state };
	default: return state;
	}
};

export default ProductFilter;
