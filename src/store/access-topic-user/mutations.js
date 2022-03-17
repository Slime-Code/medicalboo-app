export function setAccessTopicUsers(state, accessTopicUsers) {
  state.accessTopicUsers = accessTopicUsers;
}

export function setAccessTopicUser(state, AccessTopicUser) {
  state.AccessTopicUser = AccessTopicUser;
}

export function addAccessTopicUser(state, AccessTopicUser) {
  state.accessTopicUsers.push(AccessTopicUser);
}

export function updateAccessTopicUser(state, AccessTopicUser) {
  let accessTopicUserInState = state.accessTopicUsers.find(
    (item) => item.id === AccessTopicUser.id,
  );

  if (accessTopicUserInState) {
    accessTopicUserInState = AccessTopicUser;
    return;
  }

  state.accessTopicUsers.push(AccessTopicUser);
}

export function deleteAccessTopicUser(state, accessTopicUserId) {
  state.accessTopicUsers = state.accessTopicUsers.filter((item) => item.id !== accessTopicUserId);
}
