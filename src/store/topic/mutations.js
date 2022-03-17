export function setTopics(state, topics) {
  state.topics = topics;
}

export function setTopic(state, topic) {
  state.topic = topic;
}

export function addTopic(state, topic) {
  state.topics.push(topic);
}

export function updateTopic(state, topic) {
  let topicInState = state.topics.find((item) => item.id === topic.id);

  if (topicInState) {
    topicInState = topic;
    return;
  }

  state.topics.push(topic);
}

export function deleteTopic(state, topicId) {
  state.topics = state.topics.filter((item) => item.id !== topicId);
}
