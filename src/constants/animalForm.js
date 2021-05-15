
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const ADD_ERROR = 'ADD_ERROR';
export const CREATED_ACCOUNT = 'CREATED_ACCOUNT';


export const INITIAL_STATE = {
  formDetails: {
    email: '',
    password: '',
    animalColour: '',
    animals: [],
    typeOfTiger: '',
  },
  message: {
    isError: false,
    text: '',
  },
};
