export function setProfiles(state, profiles) {
  state.profiles = profiles;
}

export function setProfile(state, profile) {
  state.profile = profile;
}

export function addProfile(state, profile) {
  state.profiles.push(profile);
}

export function updateProfile(state, profile) {
  let profileInState = state.profiles.find((item) => item.id === profile.id);

  if (profileInState) {
    profileInState = profile;
    return;
  }

  state.profiles.push(profile);
}

export function deleteProfile(state, profileId) {
  state.profiles = state.profiles.filter((item) => item.id !== profileId);
}
