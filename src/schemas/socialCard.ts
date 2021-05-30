

export interface User {
  id?: string,
  name: string,
  email: string,
  phone: string,
  website: string,
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  [index: string]: string;
}


export interface State {
  users ?: User[],
}


export interface Action {
  type: string,
  user ?: User,
  users ?: User[],
}


export interface EditProfileType {
  userInfo?: User,
  title ?: string,
  isCreateNew ?: boolean,
  dispatch: any,
}

export interface ProfileCardsType {
  users: User[],
  dispatch: any,
}
