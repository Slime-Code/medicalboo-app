import Topic from '../../api/Topic';

export function getApproaches({ commit }) {
  Topic.all().then((response) => {
    commit('setTopics', response.data.data);
  }).catch((response) => {
    console.log(response);
  });
}

export function getApproach({ commit }, topicId) {
  Topic.show(topicId).then((response) => {
    commit('setTopic', response.data);
  });
}

export function addTopic({ commit }, topic) {
  Topic.store(topic).then((response) => {
    commit('addTopic', response.data);
  });
}

export function updateTopic({ commit }, topicId, topic) {
  Topic.update(topicId, topic).then((response) => {
    commit('updateTopic', response.data);
  });
}

export function deleteTopic({ commit }, topicId) {
  commit('deleteTopic', topicId);

  Topic.delete(topicId).then((response) => {
    console.log(response);
  });
}
