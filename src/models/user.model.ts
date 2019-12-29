export interface IUser {
  name: string;
  email: string;
}

export interface IFutureUser {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ILogInUser {
  email: string;
  password: string;
}
