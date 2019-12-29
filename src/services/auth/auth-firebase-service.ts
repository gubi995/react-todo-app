import { auth, firebase } from '../firebase/firebase';

import { IAuthService } from './auth-service.interface';
import { IUser } from '../../models/user.model';

class AuthFirebaseService implements IAuthService {
  auth: firebase.auth.Auth;

  user: IUser | null;

  constructor() {
    this.auth = auth;
    this.user = null;
  }

  async createUserWithEmailAndPassword(email: string, password: string): Promise<void> {
    const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);

    this.user = { email: userCredential.user?.email!, name: '' };
  }

  async emailAndPasswordLogin(email: string, password: string): Promise<void> {
    const userCredential = await this.auth.signInWithEmailAndPassword(email, password);

    this.user = { email: userCredential.user?.email!, name: '' };
  }

  async facebookLogin(): Promise<any> {
    const provider = new firebase.auth.FacebookAuthProvider();
    const userCredential = await this.auth.signInWithPopup(provider);

    this.user = { email: userCredential.user?.email!, name: '' };
  }

  async googleLogin(): Promise<any> {
    const provider = new firebase.auth.GoogleAuthProvider();
    const userCredential = await this.auth.signInWithPopup(provider);

    this.user = { email: userCredential.user?.email!, name: '' };
  }

  async logout(): Promise<void> {
    return this.auth.signOut();
  }
}

const authService = new AuthFirebaseService();

export default authService;
