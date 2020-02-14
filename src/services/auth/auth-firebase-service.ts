import { auth, firebase } from '../firebase/firebase';

import { IAuthService } from './auth-service.interface';
import { IUser, IUserCredentials } from '../../models/user.model';

class AuthFirebaseService implements IAuthService {
  auth: firebase.auth.Auth;

  constructor() {
    this.auth = auth;
  }

  async getLoggedInUser(): Promise<IUser> {
    const userAsync = new Promise<IUser>((res) => {
      const unsubscribe = this.auth.onAuthStateChanged((user) => {
        if (user) {
          res({ email: user?.email!, name: user?.displayName } as IUser);
        } else {
          res();
        }

        unsubscribe();
      });
    });

    return userAsync;
  }

  async createUserWithEmailAndPassword({ email, password }: IUserCredentials): Promise<IUser> {
    const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);

    return { email: userCredential.user?.email!, name: '' };
  }

  async emailAndPasswordLogin({ email, password }: IUserCredentials): Promise<IUser> {
    const userCredential = await this.auth.signInWithEmailAndPassword(email, password);

    return { email: userCredential.user?.email!, name: '' };
  }

  async facebookLogin(): Promise<IUser> {
    const provider = new firebase.auth.FacebookAuthProvider();
    const userCredential = await this.auth.signInWithPopup(provider);

    return { email: userCredential.user?.email!, name: '' };
  }

  async googleLogin(): Promise<IUser> {
    const provider = new firebase.auth.GoogleAuthProvider();
    const userCredential = await this.auth.signInWithPopup(provider);

    return { email: userCredential.user?.email!, name: '' };
  }

  async logout(): Promise<void> {
    return this.auth.signOut();
  }
}

const authService = new AuthFirebaseService();

export default authService;
