import ProfileType from '../../api/ProfileType';

export function getProfileTypes({ commit }) {
  ProfileType.all().then((response) => {
    commit('setProfileTypes', response.data.data);
  }).catch((response) => {
    console.log(response);
  });
}

export function getProfileType({ commit }, profileTypeId) {
  ProfileType.show(profileTypeId).then((response) => {
    commit('setProfileType', response.data);
  });
}

export function addProfileType({ commit }, profileType) {
  ProfileType.store(profileType).then((response) => {
    commit('addProfileType', response.data);
  });
}

export function updateProfileType({ commit }, profileTypeId, profileType) {
  ProfileType.update(profileTypeId, profileType).then((response) => {
    commit('updateProfileType', response.data);
  });
}

export function deleteProfileType({ commit }, profileTypeId) {
  commit('deleteProfileType', profileTypeId);

  ProfileType.delete(profileTypeId).then((response) => {
    console.log(response);
  });
}
