export function setProfileTypes(state, profileTypes) {
  state.profileTypes = profileTypes;
}

export function setProfileType(state, profileType) {
  state.profileType = profileType;
}

export function addProfileType(state, profileType) {
  state.profileTypes.push(profileType);
}

export function updateProfileType(state, profileType) {
  let profileTypeInState = state.profileTypes.find((item) => item.id === profileType.id);

  if (profileTypeInState) {
    profileTypeInState = profileType;
    return;
  }

  state.profileTypes.push(profileType);
}

export function deleteProfileType(state, profileTypeId) {
  state.profileTypes = state.profileTypes.filter((item) => item.id !== profileTypeId);
}
