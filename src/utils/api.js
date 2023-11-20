import BASE_URL from './constants';

const checkResponse = (res) => (res.ok ? res.json() : res.json()
  .then((err) => Promise.reject(err)));

const checkSuccess = (res) => {
  if (res && res.success) {
    return res;
  }
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject(`Ответ не success: ${res}`);
};

const request = (endpoint, options) => fetch(`${BASE_URL}${endpoint}`, options)
  .then(checkResponse)
  .then(checkSuccess);

export default request;
