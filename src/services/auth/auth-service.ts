import httpClient from '../../shared/httpClient';

import { IUserCredentials } from '../../models/user.model';

class AuthService {
  static async getLoggedInUser(): Promise<any> {
    const refreshToken = localStorage.getItem('refresh-token');

    if (!refreshToken) {
      return null;
    }

    const { data } = await httpClient.post('/auth/refresh-token', null, {
      headers: { 'refresh-token': refreshToken },
    });

    const { accessToken, refreshToken: newRefreshToken, tokenExpiryInSec, email } = data;

    localStorage.setItem('refresh-token', newRefreshToken);

    return { email, accessToken, tokenExpiryInSec };
  }

  static async createUserWithEmailAndPassword({ email, password }: IUserCredentials): Promise<any> {
    const { data } = await httpClient.post('/auth/sign-up', { email, password });

    const { accessToken, refreshToken, tokenExpiryInSec, email: emailFromServer } = data;

    localStorage.setItem('refresh-token', refreshToken);

    return { email: emailFromServer, accessToken, tokenExpiryInSec };
  }

  static async emailAndPasswordLogin({ email, password }: IUserCredentials): Promise<any> {
    const { data } = await httpClient.post('/auth/login', { email, password });

    const { accessToken, refreshToken, tokenExpiryInSec, email: emailFromServer } = data;

    localStorage.setItem('refresh-token', refreshToken);

    return { email: emailFromServer, accessToken, tokenExpiryInSec };
  }
}

export default AuthService;
