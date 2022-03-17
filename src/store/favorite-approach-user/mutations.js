export function setFavoriteApproachUsers(state, favoriteApproachUsers) {
  state.favoriteApproachUsers = favoriteApproachUsers;
}

export function setFavoriteApproachUser(state, favoriteApproachUser) {
  state.favoriteApproachUser = favoriteApproachUser;
}

export function addFavoriteApproachUser(state, favoriteApproachUser) {
  state.favoriteApproachUsers.push(favoriteApproachUser);
}

export function updateFavoriteApproachUser(state, favoriteApproachUser) {
  let favoriteApproachUserInState = state.favoriteApproachUsers.find(
    (item) => item.id === favoriteApproachUser.id,
  );

  if (favoriteApproachUserInState) {
    favoriteApproachUserInState = favoriteApproachUser;
    return;
  }

  state.favoriteApproachUsers.push(favoriteApproachUser);
}

export function deleteFavoriteApproachUser(state, favoriteApproachUserId) {
  state.favoriteApproachUsers = state.favoriteApproachUsers.filter(
    (item) => item.id !== favoriteApproachUserId,
  );
}
