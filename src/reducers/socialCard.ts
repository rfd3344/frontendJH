
import { State, Action } from '@/schemas/socialCard';

const initialState : State = {
  users: [],
};


const handleEditUser = (state = initialState, action: Action) => {
  const newUsers = state.users.map(user => {
    if (user.id === action.user.id) {
      return action.user;
    }
    return user;
  });

  return {
    ...state,
    users: newUsers,
  };
};

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
  case 'INITIAL_USER':
    return {
      users: action.users,
    };
  case 'EDIT_USER':
    return handleEditUser(state, action);
  case 'ADD_NEW_USER':
    return {
      ...state,
      users: [...state.users, action.user],
    };
  default: return state;
  }
}
