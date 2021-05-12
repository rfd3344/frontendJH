
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CREATED_ACCOUNT = 'CREATED_ACCOUNT';


export const INITIAL_STATE = {
	formDetails: {
		email: '',
		password: '',
		animalColour: '',
		animals: [],
		typeOfTiger: '',
	},
	serverResponse: {
		isFailed: false,
		message: '',
	},
};
