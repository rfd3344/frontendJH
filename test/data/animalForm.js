
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



export const updatedState = {
  formDetails: {
    email: 'email@email.com',
    password: 'password',
    animalColour: 'red',
    animals: ['tiger'],
    typeOfTiger: 'typeOfTiger',
  },
  message: {
    isError: true,
    text: 'error',
  },
};
