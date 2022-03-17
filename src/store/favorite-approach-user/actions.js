import FavoriteApproachUser from '../../api/FavoriteApproachUser';

export function getFavoriteApproachUsers({ commit }) {
  FavoriteApproachUser.all().then((response) => {
    commit('setFavoriteApproachUsers', response.data.data);
  }).catch((response) => {
    console.log(response);
  });
}

export function getFavoriteApproachUser({ commit }, favoriteApproachUserId) {
  FavoriteApproachUser.show(favoriteApproachUserId).then((response) => {
    commit('setFavoriteApproachUser', response.data);
  });
}

export function addFavoriteApproachUser({ commit }, favoriteApproachUser) {
  FavoriteApproachUser.store(favoriteApproachUser).then((response) => {
    commit('addFavoriteApproachUser', response.data);
  });
}

export function updateFavoriteApproachUser({ commit }, id, favoriteApproachUser) {
  FavoriteApproachUser.update(id, favoriteApproachUser).then((response) => {
    commit('updateFavoriteApproachUser', response.data);
  });
}

export function deleteFavoriteApproachUser({ commit }, favoriteApproachUserId) {
  commit('deleteFavoriteApproachUser', favoriteApproachUserId);

  FavoriteApproachUser.delete(favoriteApproachUserId).then((response) => {
    console.log(response);
  });
}
