import httpClient from '../../shared/httpClient';

import { ISocialSignUpData, ITraditionalSignUpData, ITraditionalLoginData } from '../../models/user.model';

class AuthService {
  static async getLoggedInUser(): Promise<any> {
    const refreshToken = localStorage.getItem('refresh-token');

    if (!refreshToken) {
      return null;
    }

    const { data } = await httpClient.post('/auth/refresh-token', null, {
      headers: { 'refresh-token': refreshToken },
    });

    const { accessToken, refreshToken: newRefreshToken, tokenExpiryInSec, user } = data;

    localStorage.setItem('refresh-token', newRefreshToken);

    return { user, accessToken, tokenExpiryInSec };
  }

  static async createUserWithEmailAndPassword({ email, password }: ITraditionalSignUpData): Promise<any> {
    const { data } = await httpClient.post('/auth/sign-up', { email, password });

    const { accessToken, refreshToken, tokenExpiryInSec, user } = data;

    localStorage.setItem('refresh-token', refreshToken);

    return { user, accessToken, tokenExpiryInSec };
  }

  static async emailAndPasswordLogin({ email, password }: ITraditionalLoginData): Promise<any> {
    const { data } = await httpClient.post('/auth/login', { email, password });

    const { accessToken, refreshToken, tokenExpiryInSec, user } = data;

    localStorage.setItem('refresh-token', refreshToken);

    return { user, accessToken, tokenExpiryInSec };
  }

  static async socialSignUp({ email, name, provider, socialId }: ISocialSignUpData): Promise<any> {
    const { data } = await httpClient.post('/auth/social-sign-up', { email, name, provider, socialId });

    const { accessToken, refreshToken, tokenExpiryInSec, user } = data;

    localStorage.setItem('refresh-token', refreshToken);

    return { user, accessToken, tokenExpiryInSec };
  }
}

export default AuthService;
