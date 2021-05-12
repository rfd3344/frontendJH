import React from 'react';
import { CHANGE_FIELD, CREATED_ACCOUNT, INITIAL_STATE } from '@/constants/animalForm';
import { IState, IAction, AnimalOptions, ColourOptions } from '@/schemas/animalForm';


export const changeField = (field = '', value: string | string[]) => ({
  type: CHANGE_FIELD,
  field,
  value,
});


export const createdAccount = ({ isFailed = false, message = '' }) => ({
  type: CREATED_ACCOUNT,
  isFailed,
  message,
});


function doChangeField(state: IState, action: IAction) {
  const { formDetails } = state;
  formDetails[action.field] = action.value;
  return {
    ...state,
  };
}

function doCreateAccount(state: IState, action: IAction) {
  return {
    ...INITIAL_STATE,
    serverResponse: {
      isFailed: action.isFailed,
      message: action.message,
    },
  };
}

export function animalFormReducer(state: IState, action: IAction) {
  switch (action.type) {
  case CHANGE_FIELD:
    return doChangeField(state, action);
  case CREATED_ACCOUNT:
    return doCreateAccount(state, action);
  default:
    return state;
  }
}

const AnimalFormContext = React.createContext<{
  state: IState;
  dispatch: React.Dispatch<any>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

export default AnimalFormContext;
