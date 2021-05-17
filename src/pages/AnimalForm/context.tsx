import React, { createContext } from 'react';
import _ from 'lodash';
import {
  CHANGE_FIELD, CREATED_ACCOUNT, ADD_ERROR, INITIAL_STATE,
} from '@/constants/animalForm';
import { IState, IAction } from '@/schemas/animalForm';


export const changeField = (field = '', value: string | string[]) => ({
  type: CHANGE_FIELD,
  field,
  value,
});


export const addErrorMessage = (text = '') => ({
  type: ADD_ERROR,
  text,
});

export const createdAccount = (isError = false, text = '') => ({
  type: CREATED_ACCOUNT,
  isError,
  text,
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
    ..._.cloneDeep(INITIAL_STATE),
    message: {
      isError: action.isError,
      text: action.text,
    },
  };
}

export function animalFormReducer(state: IState, action: IAction) {
  switch (action.type) {
  case CHANGE_FIELD:
    return doChangeField(state, action);
  case ADD_ERROR:
    return {
      ...state,
      message: {
        isError: true,
        text: action.text,
      },
    };
  case CREATED_ACCOUNT:
    return doCreateAccount(state, action);
  default:
    return state;
  }
}

const AnimalFormContext = createContext<{
  state: IState;
  dispatch: React.Dispatch<any>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

export default AnimalFormContext;
