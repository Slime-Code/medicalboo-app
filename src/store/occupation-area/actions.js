import OccupationArea from '../../api/OccupationArea';

export function getOccupationAreas({ commit }) {
  OccupationArea.all().then((response) => {
    commit('setOccupationAreas', response.data.data);
  }).catch((response) => {
    console.log(response);
  });
}

export function getOccupationArea({ commit }, occupationAreaId) {
  OccupationArea.show(occupationAreaId).then((response) => {
    commit('setOccupationArea', response.data);
  });
}

export function addOccupationArea({ commit }, occupationArea) {
  OccupationArea.store(occupationArea).then((response) => {
    commit('addOccupationArea', response.data);
  });
}

export function updateOccupationArea({ commit }, occupationAreaId, occupationArea) {
  OccupationArea.update(occupationAreaId, occupationArea).then((response) => {
    commit('updateOccupationArea', response.data);
  });
}

export function deleteOccupationArea({ commit }, occupationAreaId) {
  commit('deleteOccupationArea', occupationAreaId);

  OccupationArea.delete(occupationAreaId).then((response) => {
    console.log(response);
  });
}
