export interface IUser {
  username: string;
  email: string;
  password: string;
}

export interface UserState {
  userList: IUser[];
  activeUser?: IUser;
  isLoggedIn: boolean;
}
