import axios, {AxiosError, AxiosResponse} from 'axios';
import {API_HOST, BASE_URL as URLConfiguration} from '../../config/config';
import log from '../../utils/logger';

import axiosRetry from 'axios-retry';

const axiosInstance: any = axios.create({
  baseURL: URLConfiguration + API_HOST,
});

axiosRetry(axiosInstance, {
  retries: 5,
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition(error) {
    return (
      axiosInstance.isNetworkError(error) || error.response?.status === 401
    );
  },
  onRetry() {},
});

axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.common.Accept = 'application/json';
axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

axiosInstance.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
