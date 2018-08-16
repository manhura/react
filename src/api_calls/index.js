import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export const post = (url, body = {}) => {
  return instance.post(url, body);
};

export const get = (url, params = {}) => {
  return instance.get(url, {
    params
  });
};
