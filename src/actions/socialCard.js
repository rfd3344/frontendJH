import { v4 as uuidv4 } from 'uuid';

export const initialUsers = (users) => ({
  type: 'INITIAL_USER',
  users,
});
export const editUser = (user) => ({
  type: 'EDIT_USER',
  user,
});
export const addNewUser = (user) => ({
  type: 'ADD_NEW_USER',
  user: {
    ...user,
    id: uuidv4(),
  },
});
