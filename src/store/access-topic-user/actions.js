import AccessTopicUser from '../../api/AccessTopicUser';

export function getAccessTopicUsers({ commit }) {
  AccessTopicUser.all().then((response) => {
    commit('setAccessTopicUsers', response.data.data);
  }).catch((response) => {
    console.log(response);
  });
}

export function getAccessTopicUser({ commit }, id) {
  AccessTopicUser.show(id).then((response) => {
    commit('setAccessTopicUser', response.data);
  });
}

export function addAccessTopicUser({ commit }, payload) {
  AccessTopicUser.store(payload).then((response) => {
    commit('addAccessTopicUser', response.data);
  });
}

export function updateAccessTopicUser({ commit }, id, payload) {
  AccessTopicUser.update(id, payload).then((response) => {
    commit('updateAccessTopicUser', response.data);
  });
}

export function deleteApproach({ commit }, id) {
  commit('deleteAccessTopicUser', id);

  AccessTopicUser.delete(id).then((response) => {
    console.log(response);
  });
}
