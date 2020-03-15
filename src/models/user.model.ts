export interface IUser {
  name: string;
  email: string;
}

export interface ITraditionalLoginData {
  email: string;
  password: string;
}

export interface ITraditionalSignUpData {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export interface ISocialSignUpData {
  email: string;
  name: string;
  provider: string;
  socialId: string;
}
