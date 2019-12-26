
// triggered by search bar
// used in SearchBar
export const searchText = (text) => ({
	type: 'SEARCH_TEXT',
	text,
});

// triggered by searchText action when axios loads data successful
export const loadedSuccess = (photosList) => ({
	type: 'LOADED_SUCCESS',
	photosList,
});

// triggered by searchText action when axios is failed
export const loadedFail = (message) => ({
	type: 'LOADED_FAIL',
	message,
});

// triggered when different quantity per page is selected
// used in QuantityPicker
export const pickQuantity = (quantity) => ({
	type: 'PICK_QUANTITY',
	quantity,
});

// triggered when page is changed
// used in Pagination
export const changePage = (pageNumber) => ({
	type: 'CHANGE_PAGE',
	pageNumber,
});

export const cancelSearch = () => ({
	type: 'CANCEL_SEARCH',
});
