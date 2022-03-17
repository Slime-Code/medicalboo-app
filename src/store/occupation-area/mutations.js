export function setOccupationAreas(state, occupationAreas) {
  state.occupationAreas = occupationAreas;
}

export function setOccupationArea(state, occupationArea) {
  state.occupationArea = occupationArea;
}

export function addOccupationArea(state, occupationArea) {
  state.occupationAreas.push(occupationArea);
}

export function updateOccupationArea(state, occupationArea) {
  let occupationAreaInState = state.occupationAreas.find((item) => item.id === occupationArea.id);

  if (occupationAreaInState) {
    occupationAreaInState = occupationArea;
    return;
  }

  state.occupationAreas.push(occupationArea);
}

export function deleteOccupationArea(state, occupationAreaId) {
  state.occupationAreas = state.occupationAreas.filter((item) => item.id !== occupationAreaId);
}
