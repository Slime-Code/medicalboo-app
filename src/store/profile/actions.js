import Profile from '../../api/Profile';

export function getProfiles({ commit }) {
  Profile.all().then((response) => {
    commit('setProfiles', response.data.data);
  }).catch((response) => {
    console.log(response);
  });
}

export function getProfile({ commit }, profileId) {
  Profile.show(profileId).then((response) => {
    commit('setProfile', response.data);
  });
}

export function addProfile({ commit }, profile) {
  Profile.store(profile).then((response) => {
    commit('addProfile', response.data);
  });
}

export function updateProfile({ commit }, profileId, profile) {
  Profile.update(profileId, profile).then((response) => {
    commit('updateProfile', response.data);
  });
}

export function deleteProfile({ commit }, profileId) {
  commit('deleteProfile', profileId);

  Profile.delete(profileId).then((response) => {
    console.log(response);
  });
}
