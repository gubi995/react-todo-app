export interface IAuthService {
  createUserWithEmailAndPassword: (email: string, password: string) => Promise<any>;
  emailAndPasswordLogin: (email: string, password: string) => Promise<any>;
  facebookLogin: () => Promise<any>;
  googleLogin: () => Promise<any>;
  logout: () => Promise<void>;
}
