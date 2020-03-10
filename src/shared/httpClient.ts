import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { EnhancedStore } from '@reduxjs/toolkit';

import { showLoading, hideLoading } from '../store/uiSlice';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 1000,
  withCredentials: true,
  responseType: 'json',
});

export const initHttpClientInterceptors = (store: EnhancedStore<any>) => {
  instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const { accessToken } = store.getState().userState;
      store.dispatch(showLoading());

      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      };

      return config;
    },
    (error) => {
      store.dispatch(showLoading());

      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (value: AxiosResponse<any>) => {
      store.dispatch(hideLoading());

      return value;
    },
    (error) => {
      store.dispatch(hideLoading());

      return Promise.reject(error);
    }
  );
};

export default instance;
