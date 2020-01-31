export interface IUser {
  name: string;
  email: string;
}

export interface ISignUpData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}
