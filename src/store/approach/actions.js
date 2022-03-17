import axios from 'axios';
import Approach from '../../api/Approach';

export function getApproaches({ commit }) {
  Approach.all().then((response) => {
    commit('setApproaches', response.data.data);
  }).catch((response) => {
    console.log(response);
  });
}

export function getApproach({ commit }, approachId) {
  Approach.show(approachId).then((response) => {
    commit('setApproach', response.data);
  });
}

export function addApproach({ commit }, approach) {
  Approach.store(approach).then((response) => {
    commit('addApproach', response.data);
  });
}

export function updateApproach({ commit }, approachId, approach) {
  Approach.update(approachId, approach).then((response) => {
    commit('updateApproach', response.data);
  });
}

export function deleteApproach({ commit }, approachId) {
  commit('deleteApproach', approachId);

  axios.get('http://127.0.0.1:8000/api/sanctum/csrf-cookie')
    .then(() => {
      axios
        .delete('http://127.0.0.1:8000/api/approach', {
          id: approachId,
        })
        .then((response1) => {
          console.log(response1);
          return true;
        });
    });
}
