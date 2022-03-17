import Api from './Api';

export default {
  getSRC() {
    return Api.get('sanctum/csrf-cookie');
  },

  login(data) {
    return Api.post('login', data);
  },
};
