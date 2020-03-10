import { auth, firebase } from '../firebase/firebase';

import { IUser } from '../../models/user.model';

class SocialProviderService {
  auth: firebase.auth.Auth;

  constructor() {
    this.auth = auth;
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

const socialProviderService = new SocialProviderService();

export default socialProviderService;
