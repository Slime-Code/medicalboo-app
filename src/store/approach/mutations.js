export function setApproaches(state, approaches) {
  state.approaches = approaches;
}

export function setApproach(state, approach) {
  state.approach = approach;
}

export function addApproach(state, approach) {
  state.approaches.push(approach);
}

export function updateApproach(state, approach) {
  let approachInState = state.approaches.find((item) => item.id === approach.id);

  if (approachInState) {
    approachInState = approach;
    return;
  }

  state.approaches.push(approach);
}

export function deleteApproach(state, approachId) {
  state.approaches = state.approaches.filter((item) => item.id !== approachId);
}
