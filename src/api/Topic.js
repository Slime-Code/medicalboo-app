import Api from './Api';

const ENDPOINT = 'topic';

export default {
  all() {
    return Api.get(ENDPOINT);
  },

  show(id) {
    return Api.get(`${ENDPOINT}/${id}`);
  },

  store(data) {
    return Api.post(ENDPOINT, data);
  },

  delete(id) {
    return Api.delete(`${ENDPOINT}/${id}`);
  },

  update(id, data) {
    return Api.put(`${ENDPOINT}/${id}`, data);
  },
};
