import { IUserCredentials, IUser } from '../../models/user.model';

export interface IAuthService {
  createUserWithEmailAndPassword: ({ email, password }: IUserCredentials) => Promise<IUser>;
  emailAndPasswordLogin: ({ email, password }: IUserCredentials) => Promise<IUser>;
  facebookLogin: () => Promise<IUser>;
  googleLogin: () => Promise<IUser>;
  logout: () => Promise<void>;
}
